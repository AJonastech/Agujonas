import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./themetoggle.module.scss";

// Reads the theme the no-flash script (in _document.js) already applied, then
// toggles it with a circle-spread reveal via the View Transitions API. On
// browsers without that API (or with reduced motion), it falls back to an
// instant swap.
export const ThemeToggle = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") || "dark");
  }, []);

  const apply = (next) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* ignore private-mode write failures */
    }
    setTheme(next);
  };

  const toggle = (e) => {
    const next = theme === "dark" ? "light" : "dark";
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduce) {
      apply(next);
      return;
    }

    // Anchor the circle on the button and size it to reach the farthest corner.
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const r = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    const root = document.documentElement;
    root.style.setProperty("--circle-x", `${x}px`);
    root.style.setProperty("--circle-y", `${y}px`);
    root.style.setProperty("--circle-r", `${r}px`);
    root.setAttribute("data-vt", "active");

    const transition = document.startViewTransition(() => apply(next));
    transition.finished.finally(() => root.removeAttribute("data-vt"));
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      <span className={styles.icon}>
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </span>
    </button>
  );
};
