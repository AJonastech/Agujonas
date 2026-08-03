import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";
import styles from "./experience.module.scss";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {/* git-log style date rail down the left edge — the timeline IS a real
          sequence, so a subtle rail is justified here (unlike numbered markers). */}
      <div className={styles.timeline}>
        {experience.map((item) => (
          <ExperienceItem key={item.title + item.time} {...item} />
        ))}
      </div>
    </section>
  );
};

const experience = [
  {
    title: "Techsense Developers Inc",
    position: "Senior Software Engineer",
    time: "Jan 2025 — Present",
    location: "Lagos, Nigeria",
    current: true,
    description:
      "Maintain and develop across a distributed system of 34 microservices powering a job-aggregation platform that processes millions of listings daily, orchestrated on Kubernetes across staging and production. Designed a webhook proxy service that fans inbound requests out to configured downstream services with encryption in and decryption out, and built an embedding-based semantic matching system classifying listings against O*NET codes in real time via vector search. Deployed on EC2 with Caddy for auto-SSL.",
    tech: [
      "Python",
      "Django",
      "Kubernetes",
      "Docker",
      "vector search",
      "EC2 / Caddy",
    ],
  },
  {
    title: "365Tax.de",
    position: "Senior Software Engineer",
    time: "Dec 2024 — Mar 2025",
    location: "Remote",
    description:
      "Designed and implemented a banking and invoice automation system for self-employed users and SMEs, generating ZUGFeRD and XRechnung invoices and easing tax remittance across Europe via direct FinAPI, Stripe, and Etsy integrations. Set up automated reconciliation to keep bank transactions current, and managed deployments across ECS (production backend) and EC2 (staging + frontends).",
    tech: [
      "Python",
      "Next.js",
      "TypeScript",
      "FinAPI",
      "Stripe",
      "AWS ECS / EC2",
    ],
  },
  {
    title: "Allos AI",
    position: "Frontend Engineer",
    time: "Oct 2024 — Mar 2025",
    location: "Remote",
    description:
      "Built tooling for a Causal AI platform focused on pharmaceutical formulation, delivering interactive causal-inference and causal-discovery workflows over datasets with millions of rows. Built nodal network visualizations mapping relationships across formulation phase spaces to surface scale-up risks earlier.",
    tech: [
      "React",
      "TypeScript",
      "React Flow",
      "React Query",
      "Zustand",
      "Shadcn UI",
    ],
  },
  {
    title: "BmHm, USAF",
    position: "Volunteer React Developer",
    time: "Apr 2023 — Feb 2024",
    location: "Remote",
    description:
      "Built and maintained accessible, responsive UI components for a mental-health support platform serving the Black community, collaborating with a global team to ship new pages, fix UI bugs, and improve design consistency across the site.",
    tech: ["React", "JavaScript", "Accessibility", "Responsive UI"],
  },
  {
    title: "Frenbox",
    position: "Frontend Developer",
    time: "Mar 2021 — Nov 2024",
    location: "Remote",
    description:
      "Developed core features for a cloud-storage platform letting users search and discover public content backed up by others. Built file upload, sharing, and permission-management workflows with real-time sync, and implemented scalable content indexing and search logic for fast retrieval of user-generated data.",
    tech: ["React", "JavaScript", "Search Indexing", "Real-time Sync"],
  },
];
