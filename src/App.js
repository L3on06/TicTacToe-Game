import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from "./components/ResetButton"
import Modal from './components/Modal';

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleBoxClick(boxIdx) {
    const updateBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    })

    const winner = checkWinner(updateBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1
        setScores({ ...scores, oScore })
      } else {
        let { xScore } = scores;
        xScore += 1
        setScores({ ...scores, xScore })
      }
    }

    setBoard(updateBoard);
    setPlaying(!xPlaying);
  }

  function checkWinner(board) {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x];
      }
    }
  }

  function Winner() {
    if (gameOver === true) {
      setShowModal(true)
      // console.log("The " + checkWinner(board) + " Player Win")
    } else {
      alert("No one wins")
    }
    resetBoard()
  }

  function resetBoard() {
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }

  function ScoreResetBoard() {
    setScores({ xScore: 0, oScore: 0 })
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }


  return (
    <div className="App">
      <Modal showModal={showModal} checkWinner={checkWinner} />
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? Winner() : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} ScoreResetBoard={ScoreResetBoard} />
    </div>
  );
}

export default App;
