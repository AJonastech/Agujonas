import styles from "./engineeringwork.module.scss";
import { FiGitBranch, FiArrowUpRight } from "react-icons/fi";

// Selected engineering work — deep-dive case studies, mirroring the
// reference's card: git-branch icon, title + year inline, description below,
// and a boxed arrow button on the right.
const commits = [
  {
    title: "get.it: professional networking on a microservice mesh",
    detail:
      "Built the get.it platform as a standalone service on the Techsense mesh — profiles, connections, and real-time O*NET semantic matching over vector search.",
    year: "2025",
    href: "https://techsensedev.com/work/get-it",
  },
  {
    title: "NotJustEvent: events and experiences platform",
    detail:
      "Engineered the NotJustEvent product surface and backend services within the Techsense infrastructure.",
    year: "2025",
    href: "https://techsensedev.com/work/notjustevent",
  },
];

export const EngineeringWork = () => {
  return (
    <div className={styles.card}>
      {commits.map((c) => (
        <a
          key={c.title}
          href={c.href}
          target="_blank"
          rel="noreferrer"
          className={styles.row}
        >
          <FiGitBranch className={styles.commitIcon} />
          <div className={styles.body}>
            <div className={styles.top}>
              <span className={styles.title}>{c.title}</span>
              <span className={styles.year}>{c.year}</span>
            </div>
            <span className={styles.detail}>{c.detail}</span>
          </div>
          <span className={styles.arrow}>
            <FiArrowUpRight />
          </span>
        </a>
      ))}
    </div>
  );
};
