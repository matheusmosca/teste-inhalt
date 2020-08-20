import { useState, useEffect } from "react";

function getLocalStorageValue(key, initialValue) {
  const storedValue = JSON.parse(localStorage.getItem(key));

  if (storedValue) return storedValue;
  return initialValue;
}

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getLocalStorageValue(key, initialValue)
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key])

  return [value, setValue]
}