import React from "react";

const Square = ({ value, onClickEvent }) => {
  return (
    <button className="squareComponent" onClick={onClickEvent}>
      {value}
    </button>
  );
};

export default Square;
