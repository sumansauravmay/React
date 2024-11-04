
import './App.css';
import useApi from './components/Api';

function App() {
const data=useApi(`https://fakestoreapi.com/products`);


  return (
    <div className="App">
     {
      data.map((el)=>(
        <div key={el.id}>{el.title}</div>
      ))
     }
    </div>
  );
}

export default App;
