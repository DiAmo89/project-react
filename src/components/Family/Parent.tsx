import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: "solid red 2px", margin: "20px" }}>
      Parent {count}
      <Child count={count} setCount={setCount}/>
      <button
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      ></button>
    </div>
  );
}