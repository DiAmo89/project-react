import { createContext } from "react";

interface CounterContextType {
  count: number | undefined;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined,
);
