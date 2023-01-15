import React, { useState } from "react";
import Square from "./Square";
import "./style.css";

const Board = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsnext, setXIsnext] = useState(true);

  const resetGame = () => {
    setSquares(initialSquares);
    setXIsnext(true);
  };

  const handleClickEvent = (i) => {
    const newSquares = [...squares];
    const winnerDeclared = Boolean(calculateWiner(squares));
    const squareFilled = Boolean(newSquares[i]);
    if (winnerDeclared || squareFilled) {
      return;
    }
    newSquares[i] = xIsnext ? "X" : "O";
    setSquares(newSquares);
  };

  const calculateWiner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWiner(squares);

  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClickEvent={() => {
          handleClickEvent(i);
          setXIsnext(!xIsnext);
        }}
      />
    );
  };

  return (
    <div className="boardComponent">
      <div className="status">
        {winner ? `Winner : ${winner}` : `Next player: ${xIsnext ? "X" : "O"}`}
      </div>
      <div className="boardRow">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="boardRow">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="boardRow">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div>
        <button onClick={resetGame} className="reset-button">
          Reset game
        </button>
      </div>
    </div>
  );
};

export default Board;
