import { useState, useEffect } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const getSavedValue = (key: string, initialValue: any) => {
  const storageValue = JSON.parse(localStorage.getItem(key) || "{}");
  if (storageValue) return storageValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

export default useLocalStorage;
