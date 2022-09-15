import { useState, useEffect } from "react";

function useDataFetching(dataSource) {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(dataSource);
        const result = await data.json();

        if (result) {
          setInfo(result);
        }
      } catch (e) {
        setError(e.message);
      }
    }
    fetchData();
  }, [dataSource]);

  const refetch = () => {
    async function fetchData() {
      try {
        const data = await fetch(dataSource);
        const result = await data.json();

        if (result) {
          setInfo(result);
        }
      } catch (e) {
        setError(e.message);
      }
    }
    fetchData();
  };

  return { error, info, refetch };
}

export default useDataFetching;
