import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../lib/constant";

const useFetch = (url) => {
  const [state, setState] = useState({
    isLoading: true,
    data: null,
    error: null,
  });
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `${BASE_URL}${url}`,
      }).then((res) => {
        setState((prev) => {
          return {
            ...prev,
            isLoading: false,
            data: res.data,
            error: null,
          };
        });
      });
    } catch (error) {
      setState((prev) => {
        return {
          ...prev,
          isLoading: false,
          data: null,
          error: error,
        };
      });
    }
  }, []);
  return state;
};

export default useFetch;
