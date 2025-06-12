import { useState } from 'react';
import logo from './logo.png';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Future Content</h1>
        <p>
          <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button>
        </p>
      </header>
    </div>
  );
};

export default App;
