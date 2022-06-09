import { evaluate } from "mathjs";
import { useState } from "react";
import "./App.css";
import Numbers from "./components/Numbers";
import Operators from "./components/Operators";

const App = () => {
  const [input, setInput] = useState("");

  //function to calculate a result on a specific button click and update the state

  const calculate = (button) => {
    if (button === "=") {
      const result = evaluate(input);
      setInput(result);
    } else if (button === "c") {
      setInput("");
    } else setInput(input + button);
  };

  const handleClick = (e) => {
    const display = e.target.textContent;
    calculate(display);
  };

  return (
    <div className="App">
      <h1>My Calculator</h1>
      <h2 data-testid="display">{input}</h2>
      <Operators handleClick={handleClick} />
      <Numbers handleClick={handleClick} />
    </div>
  );
};

export default App;
