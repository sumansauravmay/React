import React,{useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [searchdata, setSearchdata] = useState("");
  
    const getData = async () => {
      setLoading(true);
      try {
        axios
          .get("https://myindiaa-deployement.onrender.com/products")
          .then((res) => {
            console.log(res.data);
            setData(res.data);
            setLoading(false);
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
      Home
    </div>
  )
}

export default Home
