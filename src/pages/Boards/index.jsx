import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getBoardDetailsAPI } from "~/apis";
import AppBar from "~/components/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";

const Boards = () => {
  const [board, setBoard] = useState({});
  useEffect(() => {
    getBoardDetailsAPI("66e05e2959fff7eb55766521")
      .then((res) => {
        setBoard(res?.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar board={board} />
      <BoardContent board={board} />
    </Container>
  );
};

export default Boards;
