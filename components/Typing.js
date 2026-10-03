"use client";
import { useEffect, useState } from "react";

export default function Typing({ words }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[i % words.length];
    let d = del ? 40 : 85;
    if (!del && txt === w) d = 1400;
    const t = setTimeout(() => {
      if (!del && txt === w) setDel(true);
      else if (del && txt === "") { setDel(false); setI(i + 1); }
      else setTxt(del ? w.slice(0, txt.length - 1) : w.slice(0, txt.length + 1));
    }, d);
    return () => clearTimeout(t);
  }, [txt, del, i, words]);

  return (
    <div className="type" aria-label={words.join(", ")}>
      {txt}<span className="caret" />
    </div>
  );
}
