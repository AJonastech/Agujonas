import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import styles from "./meshhero.module.scss";

// Lazy-load the Three.js chunk so it never blocks first paint of the
// hero text / nav. Client-only — WebGL can't SSR.
const MeshScene = dynamic(() => import("./MeshScene"), {
  ssr: false,
  loading: () => <div className={styles.poster} aria-hidden="true" />,
});

export const MeshHero = () => {
  const containerRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [inView, setInView] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Respect prefers-reduced-motion: skip WebGL entirely, show static poster.
  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Pause the render loop when the hero scrolls out of view.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const showCanvas = mounted && !reducedMotion;

  return (
    <div ref={containerRef} className={styles.meshHero} aria-hidden="true">
      {showCanvas ? (
        <MeshScene paused={!inView} />
      ) : (
        <div className={styles.poster} />
      )}
      {/* Left-to-right fade so hero copy always stays legible over the mesh */}
      <div className={styles.scrim} />
    </div>
  );
};
