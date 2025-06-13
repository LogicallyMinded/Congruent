import { useState } from 'react';
import logo from './logo.png';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

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
        <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
          <ParallaxLayer offset={0} speed={0.1}>
            <div class="animation-layer parallax" id="stars"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div class="animation-layer parallax" id="moon"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.1}>
            <div class="animation-layer parallax" id="surface"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.2}>
            <div class="animation-layer parallax" id="programmer"></div>
          </ParallaxLayer>
        </Parallax>
      </header>
    </div>
  );
};

export default App;
