import React from "react";
import Board from "./Board";
import "./style.css";

const Game = () => {
  return (
    <div className="gameComponent">
      Tic-Tac-Toe
      <Board />
    </div>
  );
};

export default Game;
