import styles from "./engineeringwork.module.scss";
import { FiGitCommit, FiArrowUpRight } from "react-icons/fi";

// Commit-style log of shipped work, mirroring the reference's
// "Selected Engineering Work" list.
const commits = [
  {
    title: "Webhook proxy: fan inbound requests to 30+ downstream services",
    detail:
      "Encryption on ingress, decryption on egress, per-route config management.",
    year: "2025",
  },
  {
    title: "Real-time O*NET classification via vector search",
    detail:
      "Embedding-based semantic matching of incoming listings at ingest time.",
    year: "2025",
  },
  {
    title: "Kubernetes orchestration across staging and production",
    detail: "Deployment orchestration for a 34-microservice platform.",
    year: "2025",
  },
  {
    title: "Banking + invoice automation for EU SMEs",
    detail:
      "ZUGFeRD/XRechnung generation, FinAPI/Stripe/Etsy integration, automated reconciliation.",
    year: "2024",
  },
];

export const EngineeringWork = () => {
  return (
    <div className={styles.list}>
      {commits.map((c) => (
        <div key={c.title} className={styles.row}>
          <FiGitCommit className={styles.commitIcon} />
          <div className={styles.body}>
            <div className={styles.top}>
              <span className={styles.title}>{c.title}</span>
              <span className={styles.year}>{c.year}</span>
            </div>
            <span className={styles.detail}>{c.detail}</span>
          </div>
          <FiArrowUpRight className={styles.arrow} />
        </div>
      ))}
    </div>
  );
};
