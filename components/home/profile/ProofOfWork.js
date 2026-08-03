import Link from "next/link";
import styles from "./proofofwork.module.scss";
import { FiArrowUpRight } from "react-icons/fi";

// Card grid mirroring the reference "Proof of Work": a preview panel on top,
// title + external link, description, tag chips (with a +N overflow pill).
const work = [
  {
    title: "Job Aggregation Platform",
    href: "",
    preview: {
      lines: [
        "$ kubectl get pods -n aggregation",
        "webhook-proxy    Running ✓",
        "onet-matcher     Running ✓",
        "ingest-workers   Running ✓ x12",
        "vector-index     Running ✓",
      ],
    },
    description:
      "A distributed system of 34 microservices processing millions of job listings daily — webhook proxy, encryption boundaries, and real-time O*NET semantic matching over vector search.",
    tags: ["Python", "Django", "Kubernetes", "vector search"],
    extra: 2,
  },
  {
    title: "get.it",
    href: "",
    preview: {
      lines: [
        "$ svc status get.it",
        "state       building",
        "integrates  job-platform mesh",
        "// details coming soon",
      ],
    },
    description:
      "A professional networking platform built as a standalone service integrated into the existing job-platform infrastructure. Details coming soon.",
    tags: ["Python", "microservices"],
    extra: 1,
  },
  {
    title: "Facetime",
    href: "https://videoapp-murex.vercel.app/",
    img: "/project-imgs/facetime.png",
    description:
      "A real-time video conferencing app with multi-user support and low-latency WebRTC communications.",
    tags: ["Next.js", "Stream SDK", "WebRTC"],
    extra: 2,
  },
  {
    title: "365Tax",
    href: "https://365tax.de",
    img: "/project-imgs/365tax.png",
    description:
      "Banking and invoice automation for SMEs across Europe — ZUGFeRD/XRechnung, FinAPI, Stripe, deployed on AWS ECS/EC2.",
    tags: ["Next.js", "FinAPI", "Stripe"],
    extra: 2,
  },
  {
    title: "Allos AI",
    href: "https://development.d2s1ad5lt18uie.amplifyapp.com/",
    img: "/project-imgs/allosai.png",
    description:
      "Causal-inference and causal-discovery tooling with React Flow node graphs over datasets with millions of rows.",
    tags: ["React", "React Flow", "React Query"],
    extra: 3,
  },
  {
    title: "Padihold",
    href: "https://padi-hold.vercel.app",
    img: "/project-imgs/padihold.png",
    description:
      "Nigeria's escrow platform — secure transaction holding with trusted dispute resolution and fund protection.",
    tags: ["Next.js", "Node.js", "Zustand"],
    extra: 4,
  },
];

const Card = ({ item }) => {
  const inner = (
    <>
      <div className={styles.preview}>
        {item.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.img} alt={`${item.title} preview`} />
        ) : (
          <div className={styles.terminal}>
            <div className={styles.termBar}>
              <span />
              <span />
              <span />
            </div>
            <pre>{item.preview?.lines?.join("\n")}</pre>
          </div>
        )}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>
          <h4>{item.title}</h4>
          <FiArrowUpRight className={styles.cardLinkIcon} />
        </div>
        <p className={styles.cardDesc}>{item.description}</p>
        <div className={styles.tags}>
          {item.tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
          {item.extra ? (
            <span className={styles.tagMore}>+{item.extra}</span>
          ) : null}
        </div>
      </div>
    </>
  );

  return item.href ? (
    <Link
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      {inner}
    </Link>
  ) : (
    <div className={styles.card}>{inner}</div>
  );
};

export const ProofOfWork = () => {
  return (
    <div className={styles.grid}>
      {work.map((item) => (
        <Card key={item.title} item={item} />
      ))}
    </div>
  );
};
