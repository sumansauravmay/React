import React,{useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
    const [data, setData] = useState([]);
  
    const getData = async () => {
      try {
        axios
          .get("https://myindiaa-deployement.onrender.com/products")
          .then((res) => {
            console.log(res.data);
            setData(res.data);
          });
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      getData();
    }, []);


  return (
    <div>
        {data?.map((item)=>(
            <div key={item.id}>{item.title}</div>
        ))}
    </div>
  )
}

export default Home
