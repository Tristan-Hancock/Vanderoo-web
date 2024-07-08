import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/scroll.css';
const ScrollAnimationWrapper = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation only triggers once
    threshold: 0.3,   // Trigger when 50% of the component is visible
  });

  return (
    <div ref={ref} className={`element ${inView ? 'in-view' : ''}`}>
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
