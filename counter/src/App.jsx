import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);
  const addCounter = () => {
    if (counter < 10) {
      setCounter((counter) => counter + 1);
    }
  };
  const removeCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Umang Counter</h1>
      <h2>Count:{counter}</h2>
      <button onClick={addCounter}>Add value</button>
      <br />
      <br />
      <button onClick={removeCounter}>Remove value</button>
    </>
  );
}

export default App;
