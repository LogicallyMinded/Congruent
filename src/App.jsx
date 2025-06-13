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
        <Parallax pages={4} style={{ top: '0', left: '0' }} class="animation">
          <ParallaxLayer offset={0} speed={0}>
            <div class="animation-layer parallax" id="stars"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.4}>
            <div class="animation-layer parallax" id="moon"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0}>
            <div class="animation-layer parallax" id="stars"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.4}>
            <div class="animation-layer parallax" id="clouds_top"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0}>
            <div class="animation-layer parallax" id="space_from_earth"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.2}>
            <div class="animation-layer parallax" id="clouds"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.3}>
            <div class="animation-layer parallax" id="clouds_invert"></div>
          </ParallaxLayer>
        </Parallax>
      </header>
    </div>
  );
};

export default App;
