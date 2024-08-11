import { useState } from "react";
import "./TicTac.css";
import useTicTac from "../hooks/TicTacHooks";

const initialboard = () => Array(9).fill(null);

function TicTac() {
  const {
    board,
    isNext,
    WINNING_PATTERNS,
    calculateWinner,
    handleClick,
    getStatusMessage,
    restGame,
  } = useTicTac();
  // const [board, setBoard] = useState(initialboard);
  console.log(board);
  return (
    <>
      <div className="game">
        <div className="status">{getStatusMessage}</div>
        <button onClick={restGame}>Reset Game</button>
        <div className="board">
          {board.map((b, index) => {
            return (
              <button
                className="cell"
                key={index}
                onClick={() => handleClick(index)}
                disabled={b !== null}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TicTac;
