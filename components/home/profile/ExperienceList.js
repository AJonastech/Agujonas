import { useState } from "react";
import styles from "./experiencelist.module.scss";
import { FiChevronDown, FiArrowUpRight } from "react-icons/fi";

const experience = [
  {
    company: "Techsense Developers Inc",
    role: "Senior Software Engineer",
    time: "Jan 2025 — Present",
    initials: "TS",
    accent: "#4fd1a0",
    link: "https://techsensedev.com/",
    summary:
      "Maintain and build across a distributed system of 34 microservices powering a job-aggregation platform processing millions of listings daily.",
    bullets: [
      "Designed a webhook proxy service that fans inbound requests out to downstream services with encryption in and decryption out.",
      "Built an embedding-based semantic matching system classifying listings against O*NET occupation codes in real time via vector search.",
      "Manage Kubernetes orchestration across staging and production; backend on EC2 behind Caddy for auto-SSL.",
    ],
  },
  {
    company: "Quiqorder",
    role: "Co-founder & Engineer",
    time: "2025 — Present",
    initials: "QO",
    accent: "#4fd1a0",
    link: "https://www.tryquiqorder.com/",
    summary:
      "Co-founding a WhatsApp-first social-commerce platform that lets sellers run a storefront, automate chats, and collect payments from one dashboard.",
    bullets: [
      "Building the storefront, order management, and payment flows that let sellers sell on WhatsApp around the clock.",
      "Automating chat and Status posts so merchants can capture and fulfil orders without being online.",
    ],
  },
  {
    company: "365Tax.de",
    role: "Senior Software Engineer",
    time: "Dec 2024 — Mar 2025",
    initials: "36",
    accent: "#e0a05c",
    link: "https://www.365tax.de/",
    summary:
      "Designed a banking and invoice automation system for self-employed users and SMEs across Europe.",
    bullets: [
      "Generated ZUGFeRD and XRechnung invoices and eased tax remittance via direct FinAPI, Stripe, and Etsy integrations.",
      "Built automated reconciliation keeping bank transactions current.",
      "Managed deployments across ECS (production backend) and EC2 (staging + frontends).",
    ],
  },
  {
    company: "Allos AI",
    role: "Frontend Engineer",
    time: "Oct 2024 — Mar 2025",
    initials: "AA",
    accent: "#8a8f98",
    link: "http://allos.ai/",
    summary:
      "Built tooling for a Causal AI platform focused on pharmaceutical formulation.",
    bullets: [
      "Delivered interactive causal-inference and causal-discovery workflows over datasets with millions of rows.",
      "Built nodal network visualizations mapping relationships across formulation phase spaces to surface scale-up risks earlier.",
    ],
  },
  {
    company: "BmHm, USAF",
    role: "Volunteer React Developer",
    time: "Apr 2023 — Feb 2024",
    initials: "BH",
    accent: "#8a8f98",
    link: "https://bmhm.org/",
    summary:
      "Built accessible, responsive UI for a mental-health support platform serving the Black community.",
    bullets: [
      "Collaborated with a global team to ship new pages and fix UI bugs.",
      "Improved design consistency across the site.",
    ],
  },
  {
    company: "Frenbox",
    role: "Frontend Developer",
    time: "Mar 2021 — Nov 2024",
    initials: "FB",
    accent: "#8a8f98",
    link: "https://www.frenbox.com",
    summary:
      "Developed core features for a cloud-storage platform for searching and discovering public backed-up content.",
    bullets: [
      "Built file upload, sharing, and permission-management workflows with real-time sync.",
      "Implemented scalable content indexing and search logic for fast retrieval of user-generated data.",
    ],
  },
];

const Row = ({ item }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  return (
    <div className={`${styles.row} ${open ? styles.rowOpen : ""}`}>
      <div
        className={styles.rowMain}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={open}
      >
        <span className={styles.logo} style={{ color: item.accent }}>
          {item.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.logo} alt={item.company} className={styles.logoImg} />
          ) : (
            item.initials
          )}
        </span>
        <span className={styles.rowText}>
          <a
            className={styles.company}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            {item.company}
            <FiArrowUpRight className={styles.linkIcon} />
          </a>
          <span className={styles.role}>{item.role}</span>
          <span className={styles.summary}>{item.summary}</span>
        </span>
        <span className={styles.rowRight}>
          <span className={styles.time}>{item.time}</span>
          <span
            className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
          >
            <FiChevronDown />
          </span>
        </span>
      </div>
      {open && (
        <ul className={styles.detail}>
          {item.bullets.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const ExperienceList = () => {
  return (
    <div className={styles.list}>
      {experience.map((item) => (
        <Row key={item.company + item.time} item={item} />
      ))}
    </div>
  );
};
