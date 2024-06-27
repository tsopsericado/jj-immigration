import React, { useState, useEffect, useRef } from 'react';

interface ScrollTextProps {
  text: string;
}

function TextScroll({ text }: ScrollTextProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollWidth, clientWidth } = textRef.current!;
      const newScrollPosition = (scrollWidth - clientWidth) * -1;
      setScrollPosition(newScrollPosition);
    };

    textRef.current!.addEventListener('scroll', handleScroll);

    return () => {
      textRef.current!.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textStyle = `
    transform: translateX(${scrollPosition}px);
    animation: scrollAnimation 10s linear infinite;
  `;

  return (
    <div className="relative overflow-hidden w-full h-[150px]">
      <div ref={textRef} className={`text-white font-bold text-xl ${textStyle}`}>
        {text}
      </div>
    </div>
  );
};

export default TextScroll;
