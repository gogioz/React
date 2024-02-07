import React, { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [option, setOption] = useState("");
  const [option1, setOption2] = useState("");

  function resetHandle() {
    setBill("");
    setOption("");
    setOption2("");
  }

  return (
    <div>
      <Bill onSetBill={setBill} bill={bill} />
      <Select onsetOption={setOption}>
        <span>How did you like the service?</span>
      </Select>
      <Select onsetOption={setOption2}>
        <span>How did your friend like the service?</span>
      </Select>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={option} tip1={option1} />
          <Button onResetHandle={resetHandle} />
        </>
      )}
    </div>
  );
}
export function Bill({ onSetBill, bill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        value={bill}
        type="text"
        placeholder="0"
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
export function Select({ children, onsetOption }) {
  return (
    <div>
      {children}
      <select onChange={(e) => onsetOption(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">it was okay (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">Absoultely amazing! (20%)</option>
      </select>
    </div>
  );
}
export function Output({ bill, tip, tip1 }) {
  const calcTip = bill * ((tip + tip1) / 2 / 100);
  return (
    <div>
      <h2>
        You pay ${bill + calcTip} (${bill} + ${calcTip} tip)
      </h2>
    </div>
  );
}
export function Button({ onResetHandle }) {
  return (
    <div>
      <button onClick={onResetHandle}>Reset</button>
    </div>
  );
}
