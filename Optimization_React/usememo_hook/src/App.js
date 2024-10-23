
import './App.css';
import Marks from './components/React_Momo/Marks';
import Name from './components/React_Momo/Name';
import NameData from './components/React_UseMemo/NameData';
import Subject from './components/React_UseMemo/Subject';

function App() {
  return (
    <div className="App">
     {/* <Name name="Suman Saurav"/>
     <Marks marks={100}/> */}
     <NameData name="Suman Saurav"/>
     <Subject marks={95} subject="English"/>
    </div>
  );
}

export default App;
