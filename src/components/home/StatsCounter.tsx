import React, { useEffect, useState, useRef } from "react";

interface CounterProps {
  target: number;
  duration?: number;
}

const AnimatedNumber: React.FC<CounterProps> = ({
  target,
  duration = 1600,
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <h3 ref={elementRef} className="stat-number-original">
      {count}
    </h3>
  );
};

export const StatsCounter: React.FC = () => {
  return (
    <div className="stats-counter-original-row">
      <div className="stat-item-original">
        <AnimatedNumber target={670} />
        <span className="stat-label-original">Enrolled Students</span>
      </div>

      <div className="stat-item-original">
        <AnimatedNumber target={24} />
        <span className="stat-label-original">Qualified Teachers</span>
      </div>

      <div className="stat-item-original">
        <AnimatedNumber target={28} />
        <span className="stat-label-original">Modern Classrooms</span>
      </div>

      <div className="stat-item-original">
        <AnimatedNumber target={100} />
        <span className="stat-label-original">Academic Dedication (%)</span>
      </div>
    </div>
  );
};
