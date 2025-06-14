import { useState, useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import Loader from './components/Loader';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const imageList = [
  "/images/stars.jpg",
  "/images/moon.png",
  "/images/meteor.png",
  "/images/meteor2.png",
  "/images/meteor3.png",
  "/images/clouds_top.png",
  "/images/space_from_earth.png",
  "/images/clouds.png",
  "/images/clouds_invert.png",
  // add all your background images here
];


const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    imageList.forEach(src => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === imageList.length) setLoaded(true);
      };
    });
  }, []);

  if (!loaded) return <Loader />;

  return (
    <div className="App">
      <header className="App-header">
        <Parallax pages={4} style={{ top: '0', left: '0' }} class="animation">
          <ParallaxLayer offset={0} speed={0}>
            <div class="animation-layer parallax" id="stars"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0}>
            <div class="congruent-text">
              CONGRUENT
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.4}>
            <div class="animation-layer parallax moon" id="moon"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0}>
            <div class="animation-layer parallax" id="stars"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={2.5}>
            <div class="animation-layer parallax meteor" id="meteor"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1.5}>
            <div class="animation-layer parallax meteor2" id="meteor2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.8}>
            <div class="animation-layer parallax meteor3" id="meteor3"></div>
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
          <ParallaxLayer offset={3} speed={0}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Future Content</h1>
          </ParallaxLayer>
        </Parallax>
      </header>
    </div>
  );
};

export default App;
