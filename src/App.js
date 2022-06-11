import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/counter';
import { Todo } from './Components/Todo';

function App() {
  return (
    <div className="App">
   <Counter/>
   <hr/>
   <Todo/>
    </div>
  );
}

export default App;
