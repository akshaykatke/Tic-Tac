import { useNavigate } from 'react-router-dom';
import useTicTac from '../hooks/TicTacHooks';
import './TicTac.css';

const TicTac = () => {
  const navigate = useNavigate();
  const {
    board,
    isNext,
    WINNING_PATTERNS,
    calculateWinner,
    handleClick,
    getStatusMessage,
    restGame,
  } = useTicTac();

  const goToPage = (page) => {
    navigate(page);
  };

  return (
    <div className="game">
      <div className="status">{getStatusMessage()}</div>
      <button onClick={restGame}>Reset Game</button>
      <div className="board">
        {board.map((b, index) => (
          <button
            className="cell"
            key={index}
            onClick={() => handleClick(index)}
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
      <button onClick={() => goToPage("/second-page")}>Go to Second Page</button>
      <button onClick={() => goToPage("/third-page")}>Go to Third Page</button>
    </div>
  );
};

export default TicTac;
