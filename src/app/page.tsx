"use client";

import React, { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    const eyeball = (event: MouseEvent) => {
      const eyes = document.querySelectorAll<HTMLDivElement>('.eye');
      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const x = rect.left + eye.clientWidth / 2;
        const y = rect.top + eye.clientHeight / 2;
        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const rotation = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = `rotate(${rotation}deg)`;
      });
    };

    document.body.addEventListener('mousemove', eyeball);

    // Cleanup event listener on component unmount
    return () => {
      document.body.removeEventListener('mousemove', eyeball);
    };
  }, []);

  return (
    <div className="box">
      <div className="eye"></div>
      <div className="eye"></div>
    </div>
  );
};

export default Home;