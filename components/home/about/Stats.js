import styles from "./stats.module.scss";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4 className={styles.columnHead}>
            <span className="log-label">systems</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Kubernetes</span>
            <span className="chip">Docker</span>
            <span className="chip">microservices</span>
            <span className="chip">webhook pipelines</span>
            <span className="chip">gRPC</span>
            <span className="chip">REST APIs</span>
            <span className="chip">vector search</span>
            <span className="chip">encryption</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4 className={styles.columnHead}>
            <span className="log-label">languages</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">TypeScript</span>
            <span className="chip">Python</span>
            <span className="chip">Go</span>
            <span className="chip">JavaScript</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4 className={styles.columnHead}>
            <span className="log-label">frontend range</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React / Next.js</span>
            <span className="chip">React Flow</span>
            <span className="chip">Tailwind CSS</span>
            <span className="chip">Zustand</span>
            <span className="chip">Tanstack Query</span>
            <span className="chip">FinAPI</span>
            <span className="chip">Shadcn UI</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4 className={styles.columnHead}>
            <span className="log-label">learning</span>
          </h4>
          <div className={styles.statGrid}>
            <span className={`chip ${styles.learningChip}`}>
              Go
              <span className={styles.beginnerBadge}>building</span>
            </span>
            <span className={`chip ${styles.learningChip}`}>
              Rust
              <span className={styles.beginnerBadge}>exploring</span>
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
