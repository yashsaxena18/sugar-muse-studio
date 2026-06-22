import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function Counter({
  to,
  duration = 1800,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const formatted =
    decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString("en-IN");

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}
