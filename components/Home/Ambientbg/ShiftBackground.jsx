'use client'
import React, { useRef, useEffect } from 'react';
import { createNoise3D } from 'simplex-noise';
const jQuery = require('jquery')

const ShiftBackground = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
  
    useEffect(() => {
        const rand = n => n * Math.random();
        const TAU = 2 * Math.PI;
        const fadeInOut = (t, m) => {
          let hm = 0.5 * m;
          return Math.abs((t + hm) % m - hm) / (hm);
        };
      const circleCount = 150;
      const circlePropCount = 8;
      const circlePropsLength = circleCount * circlePropCount;
      const baseSpeed = 0.1;
      const rangeSpeed = 1;
      const baseTTL = 150;
      const rangeTTL = 200;
      const baseRadius = 100;
      const rangeRadius = 200;
      const rangeHue = 60;
      const xOff = 0.0015;
      const yOff = 0.0015;
      const zOff = 0.0015;
      const backgroundColor = 'hsla(0,0%,5%,1)';
  
      let canvas, ctx, circleProps, noise3D, baseHue;
  
      const setup = () => {
        createCanvas();
        resize();
        initCircles();
        draw();
      };

    const createCanvas = () => {
        canvas = {
          a: document.createElement('canvas'),
          b: canvasRef.current
        };
        canvas.b.style = `
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
        `;
        ctx = {
          a: canvas.a.getContext('2d'),
          b: canvas.b.getContext('2d')
        };
      };

    const initCircles = () => {
        circleProps = new Float32Array(circlePropsLength);
        noise3D = createNoise3D();
        baseHue = 220;
        for (let i = 0; i < circlePropsLength; i += circlePropCount) {
          initCircle(i);
        }
      };

    const initCircle = (i) => {
        let x, y, n, t, speed, vx, vy, life, ttl, radius, hue;
        x = rand(canvas.a.width);
        y = rand(canvas.a.height);
        n = noise3D(x * xOff, y * yOff, baseHue * zOff);
        t = rand(TAU);
        speed = baseSpeed + rand(rangeSpeed);
        vx = speed * Math.cos(t);
        vy = speed * Math.sin(t);
        life = 0;
        ttl = baseTTL + rand(rangeTTL);
        radius = baseRadius + rand(rangeRadius);
        hue = baseHue + n * rangeHue;
        circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i);
      };

    const updateCircles = () => {
        let i;

        baseHue++;
      
        for (i = 0; i < circlePropsLength; i += circlePropCount) {
          updateCircle(i);
        }
    };

    const updateCircle = (i) => {
        let i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i;
      let x, y, vx, vy, life, ttl, radius, hue;
    
      x = circleProps[i];
      y = circleProps[i2];
      vx = circleProps[i3];
      vy = circleProps[i4];
      life = circleProps[i5];
      ttl = circleProps[i6];
      radius = circleProps[i7];
      hue = circleProps[i8];
    
      drawCircle(x, y, life, ttl, radius, hue);
    
      life++;
    
      circleProps[i] = x + vx;
      circleProps[i2] = y + vy;
      circleProps[i5] = life;
    
      (checkBounds(x, y, radius) || life > ttl) && initCircle(i);
    };

    const drawCircle = (x, y, life, ttl, radius, hue) => {
        ctx.a.save();
        ctx.a.fillStyle = `hsla(${hue},60%,30%,${fadeInOut(life, ttl)})`;
        ctx.a.beginPath();
        ctx.a.arc(x, y, radius, 0, TAU);
        ctx.a.fill();
        ctx.a.closePath();
        ctx.a.restore();
    };

    const checkBounds = (x, y, radius) => {
        return (
            x < -radius ||
            x > canvas.a.width + radius ||
            y < -radius ||
            y > canvas.a.height + radius
          );
    };

    const resize = () => {
      if (! containerRef.current) {
        return;
      }
 
      const { innerWidth } = window;
      canvas.a.width = innerWidth;
      canvas.a.height = jQuery(containerRef.current).parent().innerHeight();
      ctx.a.drawImage(canvas.b, 0, 0);
      canvas.b.width = innerWidth;
      canvas.b.height = jQuery(containerRef.current).parent().innerHeight();
      ctx.b.drawImage(canvas.a, 0, 0);
    };

    const render = () => {
        ctx.b.save();
        ctx.b.filter = "blur(50px)";
        ctx.b.drawImage(canvas.a, 0, 0);
        ctx.b.restore();
    };

    const draw = () => {
      ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
      ctx.b.fillStyle = backgroundColor;
      ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);
      updateCircles();
      render();
      window.requestAnimationFrame(draw);
    };

    setup();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div ref={containerRef} className="sf-canvas" >
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default ShiftBackground;