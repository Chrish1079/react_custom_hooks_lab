import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Get initial value from localStorage or use the provided initialValue
  const [state, setState] = useState(() => {
    const item = localStorage.getItem(key);
    return item !== null ? item : initialValue;
  });

  // Update localStorage whenever state or key changes
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
