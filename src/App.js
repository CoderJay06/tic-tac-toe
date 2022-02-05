import React, { useState } from "react";
import "./styles.css";
import Board from "./components/Board";

export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
      />
    </div>
  );
}
