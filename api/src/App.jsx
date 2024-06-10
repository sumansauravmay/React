import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

// api=https://fakestoreapi.com/products

function App() {
  const [data, setData] = useState([]);
  // console.log("data",data);

// let getData = async ()=>{
//   let data = await fetch(`https://fakestoreapi.com/products`);
//   data = await data.json();
// console.log(data);
// }


// const getData=async()=>{
//   try{
//     let data=await fetch(`https://fakestoreapi.com/products`);
//     data= await data.json();
//     console.log(data);
//   }catch(err){
//     console.log(err)
//   }
//   }




// const getData=()=>{
//  fetch(`https://fakestoreapi.com/products`)
//  .then((res)=>res.json())
//  .then((res)=>console.log(res))
//  .catch((err)=>console.log(err)) 
//   }
//   getData()

useEffect(()=>{
  fetch(`https://fakestoreapi.com/products`)
  .then((res)=>res.json())
  .then((res)=>{
    console.log("res",res);
    setData(res);
  })
  .catch((err)=>console.log(err)); 
},[]);


  return (
    <>
      {
        data?.map((prod)=>(
          <div key={prod.id}>
            <img width={'150px'} src={prod.image} alt="prod_pic"/>
            <p>Name: {prod.title}</p>
            <p>Price: {prod.price}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
