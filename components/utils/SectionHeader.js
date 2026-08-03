import styles from "./header.module.scss";
import { Reveal } from "./Reveal";

// Log-line grammar: a mono prefix in the left margin (like INFO/WARN in a
// service log) instead of a centered heading. `dir` kept for API compat.
export const SectionHeader = ({ title, label, dir = "r" }) => {
  const prefix = label || title;
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.prefix}>
        <span className={styles.bracket}>[</span>
        {prefix.toLowerCase()}
        <span className={styles.bracket}>]</span>
      </span>
      <h3 className={styles.titleWrap}>
        <Reveal>
          <span className={styles.title}>{title}</span>
        </Reveal>
      </h3>
      <div className={styles.line} />
    </div>
  );
};
