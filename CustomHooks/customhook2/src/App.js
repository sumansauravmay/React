
import './App.css';
import useFetchAPi from './components/FetchAPi';

function App() {
  const data=useFetchAPi();

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
