
import './App.css';
import Marks from './components/React_Momo/Marks';
import Name from './components/React_Momo/Name';

function App() {
  return (
    <div className="App">
     <Name name="Suman Saurav"/>
     <Marks marks={100}/>
    </div>
  );
}

export default App;
