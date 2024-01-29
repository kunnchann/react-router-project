import { createContext } from "react";
import { useFetch } from "../hook";

export const apiContext = createContext();
const ApiContext = ({ children }) => {
  const { data, isLoading, error } = useFetch("user");

  return (
    <apiContext.Provider value={{ data, isLoading, error }}>
      {children}
    </apiContext.Provider>
  );
};

export default ApiContext;
