"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function CountUpOnView({
  end,
  duration = 2,
  suffix = "",
  className = "",
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      if (!hasAnimated) {
        setHasAnimated(true);
        startCount();
      }
    } else {
      // Reset everything when out of view
      setCount(0);
      setHasAnimated(false);
    }
  }, [inView]);

  const startCount = () => {
    const start = 0;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(start + (end - start) * easeOut);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <span ref={ref} className={className}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
