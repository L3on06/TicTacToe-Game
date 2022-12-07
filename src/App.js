import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import ResetButton from "./components/ResetButton/ResetButton"
import ModalWinner from './components/Modals/ModalWinner';
import ModalNoWinner from "./components/Modals/ModalNoWinner"

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
  const [modalWinner, setModalWinner] = useState(false);
  const [modalNoWinner, setModalNoWinner] = useState(false);
  const [showWinner, setShowWinner] = useState("");


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
      } if (winner === "X") {
        let { xScore } = scores;
        xScore += 1
        setScores({ ...scores, xScore })
      }
    }
    if (updateBoard.every(element => element !== null)) {
      setModalNoWinner(true)
    }

    setBoard(updateBoard);
    setPlaying(!xPlaying);
  }

  function checkWinner(board) {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        setShowWinner(board[x])
        return board[x];
      }
    }
  }


  function Winner() {
    if (gameOver === true) {
      setModalWinner(true)
    }
    resetBoard()
  }

  function resetBoard() {
    setBoard(Array(9).fill(null))
    setGameOver(false);
    // setModalWinner(false);
  }

  function ScoreResetBoard() {
    setScores({ xScore: 0, oScore: 0 })
    setBoard(Array(9).fill(null))
    setGameOver(false);
  }

  function PlayAgainButton() {
    setBoard(Array(9).fill(null))
    setGameOver(false);
    setModalWinner(false);
    setModalNoWinner(false);
  }

  return (
    <div className="App">
      <ModalWinner modalWinner={modalWinner} checkWinner={checkWinner} showWinner={showWinner} PlayAgainButton={PlayAgainButton} />
      <ModalNoWinner modalNoWinner={modalNoWinner} checkWinner={checkWinner} PlayAgainButton={PlayAgainButton} />
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? Winner() : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} ScoreResetBoard={ScoreResetBoard} />
    </div>
  );
}

export default App;
