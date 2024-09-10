import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { mapOrder } from "~/util";
import ListColumn from "./ListColumn";

import BoardColumn from "./ListColumn/BoardColumn";
import BoardCard from "./ListColumn/BoardColumn/CardList/Card";
import { cloneDeep } from "lodash";

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ACTIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ACTIVE_DRAG_ITEM_TYPE_CARD"
};

const BoardContent = ({ board }) => {
  // state columns
  const [orderColumns, setOrderColumns] = useState([]);

  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);
  const [columnOriginal, setColumnOriginal] = useState(null);

  useEffect(() => {
    const ordered = mapOrder(board?.columns, board?.columnOrderIds, "_id");
    setOrderColumns(ordered);
  }, [board]);

  /**
   * find data in orders
   * @param {*} cardId is string
   * @returns object column
   */
  const findColumnByCardId = (cardId) => {
    return orderColumns.find((c) =>
      c?.cards?.map((c) => c?._id)?.includes(cardId)
    );
  };

  // #region dndKit sortable

  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: {
  //     distance: 10
  //   }
  // });

  // fix opacity undefined
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: 0.5
        }
      }
    })
  };

  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 500px of movement for phone and tablet devices
    activationConstraint: {
      delay: 250,
      tolerance: 500
    }
  });

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10
    }
  });

  const sensors = useSensors(touchSensor, mouseSensor);

  const handleSetValueColumn = (
    overColumn,
    overId,
    active,
    over,
    activeColumn,
    activeId,
    currentActive
  ) => {
    setOrderColumns((prev) => {
      const overCardIdx = overColumn?.cards?.findIndex(
        (card) => card._id === overId
      );

      let newIndex;
      const isBelowOverItem =
        active.rect?.current?.translated &&
        active.rect.current.translated.top > over.rect.top + over.rect.height;

      const modifier = isBelowOverItem ? 1 : 0;

      newIndex =
        overCardIdx >= 0
          ? overCardIdx + modifier
          : overColumn?.cards?.length + 1;

      //cloneDeep(prev) to not impact real data
      const nextColumns = cloneDeep(prev);
      const nextActiveColumn = nextColumns.find(
        (c) => c._id === activeColumn._id
      );
      const nextOverColumn = nextColumns.find((c) => c._id === overColumn._id);

      if (nextActiveColumn) {
        nextActiveColumn.cards = nextActiveColumn?.cards?.filter(
          (card) => card._id !== activeId
        );
        nextActiveColumn.columnOrderIds = nextActiveColumn?.cards?.map(
          (item) => item._id
        );
      }
      if (nextOverColumn) {
        // Remove activeId before inserting activeId
        nextOverColumn.cards = nextOverColumn?.cards?.filter(
          (card) => card._id !== activeId
        );
        // insert activeId to new index
        nextOverColumn.cards = nextOverColumn.cards.toSpliced(
          newIndex,
          0,
          currentActive
        );
        //update cardIds
        nextOverColumn.cardOrderIds = nextOverColumn.cards?.map(
          (item) => item._id
        );
      }
      return nextColumns;
    });
  };

  /**
   * Drag start item
   * @param {*} event argument in dndKit
   */
  const handleDragStart = (event) => {
    const current = event?.active?.data?.current;
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(
      current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveDragItemData(current);
    if (current?.columnId) {
      setColumnOriginal(findColumnByCardId(event?.active?.id));
    }
  };

  /**
   * Drag over item
   * @param {*} event argument in dndKit
   */
  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over || !active) return;
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      return;
    }

    const {
      id: activeId,
      data: { current: currentActive }
    } = active;
    const { id: overId } = over;
    const activeColumn = findColumnByCardId(activeId);
    const overColumn = findColumnByCardId(overId);

    if (!activeColumn || !overColumn) return;
    if (activeColumn._id !== overColumn._id) {
      handleSetValueColumn(
        overColumn,
        overId,
        active,
        over,
        activeColumn,
        activeId,
        currentActive
      );
    }
  };

  /**
   * Drag end item
   * @param {*} event argument in dndKit
   * @returns new state
   */
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const {
        id: activeId,
        data: { current: currentActive }
      } = active;
      const { id: overId } = over;
      const activeColumn = findColumnByCardId(activeId);
      const overColumn = findColumnByCardId(overId);

      if (!activeColumn || !overColumn) return;
      if (columnOriginal._id !== overColumn._id) {
        handleSetValueColumn(
          overColumn,
          overId,
          active,
          over,
          activeColumn,
          activeId,
          currentActive
        );
      } else {
        const oldIdx = columnOriginal?.cards?.findIndex(
          (c) => c._id === activeDragItemId
        );
        const newIdx = overColumn?.cards?.findIndex((c) => c._id === overId);
        const dndMoveOrderedCard = arrayMove(
          columnOriginal?.cards,
          oldIdx,
          newIdx
        );
        // Using update APIs
        // const dndMoveOrderedColumnIds = dndMoveOrderedColumn.map((c) => c._id);
        // console.log(dndMoveOrderedColumnIds);
        setOrderColumns((prev) => {
          const nextColumns = cloneDeep(prev);
          const targetColumn = nextColumns.find(
            (c) => c._id === overColumn._id
          );

          targetColumn.cards = dndMoveOrderedCard;
          targetColumn.cardOrderIds = dndMoveOrderedCard?.map(
            (item) => item._id
          );

          return nextColumns;
        });
      }
    }

    if (
      active.id !== over.id &&
      activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN
    ) {
      const oldIdx = orderColumns.findIndex((c) => c._id === active.id);
      const newIdx = orderColumns.findIndex((c) => c._id === over.id);
      const dndMoveOrderedColumn = arrayMove(orderColumns, oldIdx, newIdx);
      // Using update APIs
      // const dndMoveOrderedColumnIds = dndMoveOrderedColumn.map((c) => c._id);
      // console.log(dndMoveOrderedColumnIds);
      setOrderColumns(dndMoveOrderedColumn);
    }
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
    setColumnOriginal(null);
  };
  // #endregion

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensors}
      // closestCorners thuật toán phát hiện va chạm (góc)
      collisionDetection={closestCorners}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          height: (theme) => theme.trello.boardBarContentHeight,
          p: "10px 0"
        }}
      >
        <ListColumn columns={orderColumns} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
            <BoardColumn column={activeDragItemData} />
          )}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
            <BoardCard card={activeDragItemData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
};

BoardContent.PropTypes = {};

export default BoardContent;
