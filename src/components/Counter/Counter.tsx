import { useState } from "react";
import Button from "../ui/Button/Button";
import style from "./Counter.module.css"
function Counter() {
  const [count, setCount] = useState(0);

  const handlePlusOne = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinusTwo = () => {
    setCount((prev) => prev - 2);
  };

  const resetCounts = () => {
    setCount(0);
  };

  return (
    <section className={style.container}>
      <h2 className={style.heading}>Counter</h2>

      <Button child="+1" onClick={handlePlusOne} />
      <Button child="-2" onClick={handleMinusTwo} />
      <Button child="Reset" onClick={resetCounts} />

      <div>{count}</div>
    </section>
  );
}
 export default Counter;
 // хук useState принимает начальное значение состояния
  // возвращает кортеж, где на первом месте
  // находится переменная состояния state
  // а на втором - функция сеттер