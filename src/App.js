import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setPlaying] = useState(true);

  const handleBoxClick = (boxidx) => {
    const updateBoard = board.map((value, idx) => {
      if (idx === boxidx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    })

    setBoard(updateBoard);
    setPlaying(!xPlaying);
  }

  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick} />
    </div>
  );
}

export default App;
