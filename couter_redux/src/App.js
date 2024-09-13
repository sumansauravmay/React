
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { decdata, incdata, resetdata } from './redux/counter/action';


function App() {
 const dispatch=useDispatch();
 let count=useSelector((store)=>store.count);
 console.log(count);

  return (
    <div className="App">
    <button onClick={()=>dispatch(decdata(1))}>-</button>
    <p>{count}</p>
    <button onClick={()=>dispatch(incdata(1))}>+</button>
    <button onClick={()=>dispatch(resetdata(1))}>Reset</button>
    </div>
  );
}

export default App;
