import { Fragment } from "react";
import BoardColumn from "./BoardColumn";

const ListColumn = () => {
  return [1, 2, 3].map((item) => (
    <Fragment key={item}>
      <BoardColumn />
    </Fragment>
  ));
};

ListColumn.PropTypes = {};

export default ListColumn;
