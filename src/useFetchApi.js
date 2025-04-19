import { useState, useEffect } from 'react';

const useFetchApi = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }
        const response = await res.json();
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    };
    getData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetchApi;
