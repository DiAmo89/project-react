import { useState } from "react";

export default function IdealWeightCalculator() {
  const [height, setHeight] = useState("170");
  const [idealWeight, setIdealWeight] = useState(0);
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("female");

  function handleCalculateIdealWeight() {
    const toSub= gender === "male"? 100 :110;
    const weight = Number(height) - toSub;
    if (weight < 0) {
      setMessage("Our program does not work for heights less than 100cm");
    } else {
      setMessage("");
      setIdealWeight(weight);
    }
  }

  return (
    <div>
      <h2>Calculate your ideal weight</h2>
      <select
        name="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label htmlFor="height">Height:</label>

      <input
        type="text"
        name="height"
        id="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button type="button" onClick={handleCalculateIdealWeight}>
        Calculate
      </button>
      {message ? <p>{message}</p> : null}
      {idealWeight && !message ? (
        <p>Your ideal weight is {idealWeight}</p>
      ) : null}
    </div>
  );
}
