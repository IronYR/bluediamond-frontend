import React, {useState, useEffect, useRef} from "react";
export default function FadeInSection({ children }) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
  
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);
  
    return (
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        ref={domRef}
      >
        {children}
      </div>
    );
  }