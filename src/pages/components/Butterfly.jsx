import React, { useEffect, useState } from 'react';
import '../../css/heart.css';

const MovingCircles = ({ color }) => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const numCircles = 350;
    const newCircles = Array.from({ length: numCircles }).map((_, index) => ({
      id: index,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setCircles(newCircles);
  }, []);

  return (
    <div className="container">
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="butterfly"
          style={{
            top: `${circle.top}%`,
            left: `${circle.left}%`,
            animationDelay: `${circle.delay}s`,
            backgroundColor: 'rgba(154, 81, 248, 0.29)',
          }}
        />
      ))}
    </div>
  );
};

export default MovingCircles;
