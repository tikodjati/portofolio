"use client";
import { useEffect, useRef, useState } from "react";

const CH = "!<>-_\\/[]{}=+*^?#01";

export default function Scramble({ text }) {
    const [out, setOut] = useState(text);
    const raf = useRef();

    const run = () => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        cancelAnimationFrame(raf.current);
        let f = 0;
        const step = () => {
            f++;
            setOut(text.split("").map((c, i) =>
                c === " " ? " " : i < f / 3 ? c : CH[Math.floor(Math.random() * CH.length)]).join(""));
            if (f / 3 < text.length) raf.current = requestAnimationFrame(step);
            else setOut(text);
        };
        step();
    };

    useEffect(() => { run(); return () => cancelAnimationFrame(raf.current); }, [text]);

    return <span onMouseEnter={run} aria-label={text}>{out}</span>;
}