import React, { useState } from "react";

export default function Board(props) {
  const initialGameState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  const [gameState, setGameState] = useState(initialGameState);
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const winningPositions = [
    [0, 1, 2], // row wins
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // col wins
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagnol wins
    [2, 4, 6]
  ];
  console.log(gameState);

  function determineIfWinner() {
    const flattenGameState = [
      ...gameState[0],
      ...gameState[1],
      ...gameState[2]
    ];

    for (const winningPos of winningPositions) {
      if (
        flattenGameState[winningPos[0]] === "X" &&
        flattenGameState[winningPos[1]] === "X" &&
        flattenGameState[winningPos[2]] === "X"
      ) {
        setWinner("X");
        setGameOver((prevState) => !prevState);
        setGameState(initialGameState);
        return;
      } else if (
        flattenGameState[winningPos[0]] === "O" &&
        flattenGameState[winningPos[1]] === "O" &&
        flattenGameState[winningPos[2]] === "O"
      ) {
        setWinner("O");
        setGameOver((prevState) => !prevState);
        setGameState(initialGameState);
        return;
      }
    }
    console.log("f ", flattenGameState);
  }

  function handlePlayerTurn(row, col) {
    setGameOver(false);
    props.setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    const updatedGameState = gameState.slice();
    updatedGameState[row][col] = props.currentPlayer;
    setGameState(updatedGameState);

    determineIfWinner();
  }

  function displayGameResult() {
    if (winner === "X" || winner === "O") {
      return `${winner} wins!`;
    } else if (winner !== "X" && winner !== "O") {
      return "It's a tie!";
    }
  }
  console.log(gameOver);
  console.log(winner);
  return (
    <>
      <div className="board">
        <div className="board-square" onClick={() => handlePlayerTurn(0, 0)}>
          {gameState[0][0]}
        </div>
        <div className="board-square" onClick={() => handlePlayerTurn(0, 1)}>
          {gameState[0][1]}
        </div>
        <div className="board-square" onClick={() => handlePlayerTurn(0, 2)}>
          {gameState[0][2]}
        </div>
        <div className="board-square" onClick={() => handlePlayerTurn(1, 0)}>
          {gameState[1][0]}
        </div>
        <div className="board-square" onClick={() => handlePlayerTurn(1, 1)}>
          {gameState[1][1]}
        </div>
        <div className="board-square" onClick={() => handlePlayerTurn(1, 2)}>
          {gameState[1][2]}
        </div>
        <div className="board-square" onClick={() => handlePlayerTurn(2, 0)}>
          {gameState[2][0]}
        </div>
        <div className="board-square" onClick={() => handlePlayerTurn(2, 1)}>
          {gameState[2][1]}
        </div>
        <div className="board-square" onClick={() => handlePlayerTurn(2, 2)}>
          {gameState[2][2]}
        </div>
      </div>
      <h2>{gameOver ? displayGameResult() : null}</h2>
    </>
  );
}
