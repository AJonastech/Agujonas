import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile, AiOutlineThunderbolt } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">Redux</span>
            <span className="chip">GitHub</span>
            <span className="chip">Jira</span>
            <span className="chip">Next.js</span>
            <span className="chip">Python</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Sanity.io</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Framer-motion</span>
            <span className="chip">Groq</span>
            <span className="chip">Figma</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiOutlineThunderbolt size="2.4rem" color="var(--brand)" />
            <span>Currently learning</span>
          </h4>
          <div className={styles.statGrid}>
            <span className={`chip ${styles.learningChip}`}>
              Go
              <span className={styles.beginnerBadge}>Beginner</span>
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
