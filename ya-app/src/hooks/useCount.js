import { useState, useCallback } from "react";

export const useCount = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return { count, decrement, increment };
};
