import { useContext } from "react";
import { CounterContext } from "../CounterContext";

export const useCount = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useUser must be used inside AuthProvider");
  }
  const { count, setCount } = context;

  function increment(num: number) {
    setCount((prev) => prev + num);
  }
  function decrement(num: number) {
    setCount((prev) => prev - num);
  }

  return { count, increment, decrement };
};
