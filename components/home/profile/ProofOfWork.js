import Link from "next/link";
import styles from "./proofofwork.module.scss";
import { FiArrowUpRight } from "react-icons/fi";

// Card grid mirroring the reference "Proof of Work". Each card has a preview
// frame with a hover interaction: a colorful backdrop is revealed as the
// screenshot scales down and dims, and the title slides from top-left to
// top-center. See proofofwork.module.scss for the transition.
const work = [
  {
    title: "Quiqorder",
    href: "https://www.tryquiqorder.com/",
    img: "/project-imgs/qo_project.png",
    backdrop: "/project-imgs-backdrop/project-bg-new-portfolio-color-waves.webp",
    description:
      "A WhatsApp-first social-commerce platform — storefront, automated chats and Status posts, payments, and order management from one dashboard.",
    tags: ["Next.js", "WhatsApp API", "Payments"],
    extra: 2,
  },
  {
    title: "get.it",
    href: "https://techsensedev.com/work/get-it",
    img: "/project-imgs/getit_project.png",
    backdrop: "/project-imgs-backdrop/project-bg-runehub-rays.webp",
    description:
      "A job-aggregation and professional-networking platform built on a distributed system of 34 microservices, mostly in Go — with real-time O*NET semantic matching over vector search.",
    tags: ["Go", "microservices", "vector search"],
    extra: 2,
  },
  {
    title: "Facetime",
    href: "https://videoapp-murex.vercel.app/",
    img: "/project-imgs/facetime.png",
    backdrop: "/project-imgs-backdrop/project-bg-runeai-soft-waves.webp",
    description:
      "A real-time video conferencing app with multi-user support and low-latency WebRTC communications.",
    tags: ["Next.js", "Stream SDK", "WebRTC"],
    extra: 2,
  },
  {
    title: "365Tax",
    href: "https://365tax.de",
    img: "/project-imgs/365tax.png",
    backdrop: "/project-imgs-backdrop/project-bg-old-portfolio-red-waves.webp",
    description:
      "Banking and invoice automation for SMEs across Europe — ZUGFeRD/XRechnung, FinAPI, Stripe, deployed on AWS ECS/EC2.",
    tags: ["Next.js", "FinAPI", "Stripe"],
    extra: 2,
  },
  {
    title: "Allos AI",
    href: "https://development.d2s1ad5lt18uie.amplifyapp.com/",
    img: "/project-imgs/allosai.png",
    backdrop: "/project-imgs-backdrop/project-bg-new-portfolio-color-waves.webp",
    description:
      "Causal-inference and causal-discovery tooling with React Flow node graphs over datasets with millions of rows.",
    tags: ["React", "React Flow", "React Query"],
    extra: 3,
  },
  {
    title: "Padihold",
    href: "https://padi-hold.vercel.app",
    img: "/project-imgs/padihold.png",
    backdrop: "/project-imgs-backdrop/project-bg-runeai-soft-waves.webp",
    description:
      "Nigeria's escrow platform — secure transaction holding with trusted dispute resolution and fund protection.",
    tags: ["Next.js", "Node.js", "Zustand"],
    extra: 4,
  },
];

const Card = ({ item }) => {
  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
    >
      <div className={styles.preview}>
        {/* Colorful backdrop revealed on hover */}
        <div
          className={styles.backdrop}
          style={{ backgroundImage: `url(${item.backdrop})` }}
          aria-hidden="true"
        />
        {/* Title slides top-left → top-center on hover */}
        <span className={styles.previewTitle}>{item.title}</span>
        <div className={styles.shot}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.img} alt={`${item.title} preview`} />
        </div>
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
    </Link>
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
