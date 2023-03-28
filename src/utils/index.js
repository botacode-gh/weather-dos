import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  useEffect(() => {
    async function startFetching() {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
    }

    startFetching();
  }, [url]);

  return data;
}
