'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-20 h-10 w-10 rounded-full border transition-transform duration-75"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    ></div>
  );
}
