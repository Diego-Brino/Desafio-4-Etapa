import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(axiosConfig, immediate) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      axios.request(axiosConfig)
        .then((res) => {
          setResponse(res.data);
          resolve(res);
        })
        .catch((err) => {
          setError(err);
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  useEffect(() => {
    if (immediate === true) {
      fetchData();
    }
  }, []);

  return { response, error, loading, fetchData };
}