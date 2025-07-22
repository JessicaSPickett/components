import React from "react";
import PersonCard from "./components/PersonCard";
import Button from "./components/Button";
import FruitCard from "./components/FruitCard";

function handleClick() {
  console.log("Button clicked!");
}

function App() {
  return (
    <div>
      <PersonCard name="Alice Wonderland" age={25} occupation="Explorer" />
      <PersonCard name="Bob Builder" age={30} occupation="Engineer" />
      <PersonCard name="Charlie Chocolate" age={40} occupation="Confectioner" />

      <Button text="Click Me" onClick={handleClick} />
      <Button text="Test the second button" onClick={handleClick} />

      <FruitCard fruit="Mango" color="Red" />
      <FruitCard fruit="Banana" color="Yellow" />
      <FruitCard fruit="Strawberry" color="Purple" />
    </div>
  );
}

export default App;
