
import './App.css';
import Todo from './todo/Todo';
import TodoItem from './todo/TodoItem';
import TodoProvider from './todo/TodoProvider';

function App() {
  return (
    <TodoProvider>
     <Todo/>
     <TodoItem/>
    </TodoProvider>
  );
}

export default App;
