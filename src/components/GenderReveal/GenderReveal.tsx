import { useState } from "react";
import s from "./GenderReveal.module.css";
import type { GenderInformation } from "../../types/genderInformation";
export default function GenderReveal() {
  const [name, setName] = useState<string>("");
  const [info, setInfo] = useState<GenderInformation | undefined>(undefined);
  async function fetchGender(name: string) {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await res.json();
    setInfo(data);
  }
  //   useEffect(() => {
  //     if (name && name.length >= 2) {
  //       fetchGender();
  //     }
  //   }, [name]);
  return (
    <div className={s.container}>
      <h2>Gender Reveal</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      <button
        type="button"
        onClick={() => {
          fetchGender(name);
        }}
      >
        Submit
      </button>
      <div className={s.results}>
        <h3>Results</h3>
        <span>Name:{info?.name}</span>
        <span>Gender:{info?.gender}</span>
        <span>Probability:{info?.probability}</span>
        <span>Count:{info?.count}</span>
      </div>
    </div>
  );
}