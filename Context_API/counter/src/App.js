
import './App.css';
import CounterControls from './counter/CounterControls';
import CounterDisplay from './counter/CounterDisplay';
import CounterProvider from './counter/CounterProvider';


function App() {
  return (
    <>
     <CounterProvider>
      <CounterDisplay/>
      <CounterControls/>
    </CounterProvider>

   
    </>
   
  );
}

export default App;
