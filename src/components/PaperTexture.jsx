import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

export default function PaperTexture() {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.noLoop();
        p.colorMode(p.HSB, 100);
        p.background(0, 0, 8); // black paper hue
        createFibers(p);
      };

      const createFibers = (p) => {
        for (let i = 0; i < 3000; i++) {
          let x1 = p.random() * p.width;
          let y1 = p.random() * p.height;
          let theta = p.random() * 2 * Math.PI;
          let length = p.random() * 5 + 2;
          let x2 = Math.cos(theta) * length + x1;
          let y2 = Math.sin(theta) * length + y1;
          p.stroke(0, 0, 20, p.random() * 10 + 75);
          p.line(x1, y1, x2, y2);
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        p.background(0, 0, 8);
        createFibers(p);
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);
    return () => myP5.remove(); // clean up
  }, []);

  return (
    <div
      ref={sketchRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0, // LOW z-index
        pointerEvents: 'none',
        mixBlendMode: 'overlay' // subtle layer blend
      }}
    />
  );
  
}
