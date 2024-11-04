import { useEffect } from "react";
import { useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          console.log(res);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, [url]);

  return data;
};

export default useApi;
