"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({ to }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(to); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let s = null;
      const step = (t) => {
        if (s === null) s = t;
        const p = Math.min((t - s) / 1200, 1);
        setN(Math.round(to * p));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}</span>;
}
