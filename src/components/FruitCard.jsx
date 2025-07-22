import React from "react";

function FruitCard({ fruit, color }) {
  return (
    <div>
      <h3>{fruit}</h3>
      <p>Color: {color}</p>
    </div>
  );
}

export default FruitCard;
