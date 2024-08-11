import { useState } from "react";

const initialboard = () => Array(9).fill(null);
const useTicTac = () => {
  const [board, setBoard] = useState(initialboard);
  const [isNext, SetIsNext] = useState(true);
  const WINNING_PATTERNS = [];
  const calculateWinner = () => {};
  const handleClick = (index) => {
    //check  winning
    const winner = calculateWinner();
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isNext ? "x" : "o";
    setBoard(newBoard);
    SetIsNext(!isNext);
  };
  const getStatusMessage = () => {};
  const restGame = () => {};

  return {
    board,
    isNext,
    WINNING_PATTERNS,
    calculateWinner,
    handleClick,
    getStatusMessage,
    restGame,
  };
};
export default useTicTac;
