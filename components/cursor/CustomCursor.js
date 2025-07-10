import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./customCursor.module.scss";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Add event listener for cursor movement
    window.addEventListener("mousemove", mouseMove);

    // Track when cursor is over clickable elements
    const handleElementEnter = () => setCursorVariant("click");
    const handleElementLeave = () => setCursorVariant("default");
    
    const clickableElements = document.querySelectorAll(
      'a, button, [role="button"], input[type="submit"], input[type="button"], .section-wrapper'
    );
    
    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleElementEnter);
      element.addEventListener("mouseleave", handleElementLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleElementEnter);
        element.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, []);

  // Animation variants
  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      rotate: 0,
      scale: 1,
      transition: { 
        type: "spring",
        mass: 0.6,
        stiffness: 200,
        damping: 20,
        restDelta: 0.001
      }
    },
    click: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      rotate: [-5, 5, -5, 0],
      scale: 1.2,
      transition: { 
        type: "spring",
        mass: 0.6,
        stiffness: 200,
        damping: 10,
        restDelta: 0.001
      }
    }
  };

  return (
    <>
      <motion.div
        className={styles.cursorRing}
        variants={{
          default: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: 1
          },
          click: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: 1.5
          }
        }}
        animate={cursorVariant}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 100,
          damping: 12,
          restDelta: 0.001
        }}
      />
      <motion.div 
        className={styles.cursor} 
        variants={variants}
        animate={cursorVariant}
      >
        <img src="/profile.PNG" alt="" className={styles.cursorImage} />
      </motion.div>
    </>
  );
};
