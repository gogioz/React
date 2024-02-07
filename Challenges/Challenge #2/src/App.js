import { useState } from "react";
import "./app.css";

function App() {
  const [step, setStep] = useState(1);
  // function minusHandler() {
  //   if (step >= 1) setStep(() => step - 1);
  // }

  // function plusHandler() {
  //   setStep(() => step + 1);
  // }
  function reset() {
    setCount(0);
    setStep(1);
  }

  const [count, setCount] = useState(0);

  function countPlusHandler() {
    setCount((c) => c + step);
  }
  function countMinusHandler() {
    setCount((c) => c - step);
  }

  const date = new Date("August 03 2000");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="container">
        {/* <button onClick={minusHandler}>-</button>
        <button onClick={plusHandler}>+</button> */}
        <input
          value={step}
          type="range"
          min="0"
          max="10"
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div className="container">
        <button onClick={countMinusHandler}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {/* <span>Counter: {count}</span> */}
        <button onClick={countPlusHandler}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span> {date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div className="container">
          <button onClick={reset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
