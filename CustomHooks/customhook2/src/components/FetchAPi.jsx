import {useState, useEffect} from 'react'

const useFetchAPi = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      const getData = () => {
        fetch(`https://fakestoreapi.com/products`)
          .then((res) => res.json())
          .then((res) => {
            setData(res);
            console.log(res);
          })
          .catch((err) => console.log(err));
      };
      getData();
    }, []);
  
    return data;
}

export default useFetchAPi
