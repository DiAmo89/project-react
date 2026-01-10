import { useState } from "react";
import style from "./SpaceMissionForm.module.css";
export default function SpaceMissionForm() {
    const[user,setUser]=useState("")
    const[mission,setMission]=useState("")
    const [message, setMessage] = useState("Here you will get the result");
    
    function handleStart() {
  if (!user || !mission) {
    setMessage("Please enter your name and planet to begin your mission.");
  } else {
    setMessage(`🧑‍🚀 Astronaut ${user} is headed to ${mission}!`);
  }
}
  return (
    <>
      <div className={style.box}>
        <h2>SpaceMissionForm</h2>
        <div className={style.container}>
          <label htmlFor="input-a">Name</label>
          <input type="text" name="input-a" id="input-a" value={user}
        onChange={(e) => setUser(e.target.value)} />
          <select name="planet" value={mission}
        onChange={(e) => setMission(e.target.value)}>
            <option value="Planet">Planet</option>
            <option value="Mars">Mars</option>
            <option value="Venus">Venus</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Saturn">Saturn</option>
          </select>
        </div>
        <button type="button" className={style.btn} onClick={handleStart}>Start Mission</button>
         <p className={style.paragraf}>{message}</p>
      </div>
    </>
  );
}
