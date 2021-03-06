import {useState, useCallback} from "preact/hooks";

const getItem = (key, defaultValue=null) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return defaultValue;
};

const setItem = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

const useLocalStorage = (key, defaultValue) => {
  const [value, setInMemoryValue] = useState(getItem(key, defaultValue));

  const setValue = useCallback(value => {
    setItem(key, value);
    setInMemoryValue(value);
  }, [key]);

  return [value, setValue];
};

export default useLocalStorage;