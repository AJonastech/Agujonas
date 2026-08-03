import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Job Aggregation Platform",
    org: "Techsense",
    poster: {
      label: "34 microservices · millions of jobs/day",
      lines: [
        "$ kubectl get pods -n aggregation",
        "webhook-proxy      Running   ✓",
        "onet-matcher       Running   ✓",
        "ingest-workers     Running   ✓ x12",
        "vector-index       Running   ✓",
      ],
    },
    privateRepo: true,
    tech: [
      "Python",
      "Django",
      "Kubernetes",
      "vector search",
      "webhook proxy",
      "EC2 / Caddy",
    ],
    description:
      "A distributed system of 34 microservices processing millions of job listings daily — webhook proxy with encryption boundaries, real-time O*NET semantic matching over vector search, orchestrated on Kubernetes.",
    modalContent: (
      <>
        <p>
          The core platform I work on at Techsense: a large-scale job-aggregation
          system spanning 34 microservices, ingesting and classifying millions of
          listings per day.
        </p>
        <p>
          I designed a webhook proxy service that receives inbound requests and
          fans them out to configured downstream services, managing encryption on
          the way in and decryption on the way out, plus a request-management
          layer that simplifies configuration for each route.
        </p>
        <p>
          I also built an embedding-based semantic matching system that classifies
          incoming listings against O*NET occupation codes in real time using
          vector search, and manage deployment orchestration on Kubernetes across
          staging and production, with backend services on EC2 behind Caddy for
          auto-SSL.
        </p>
      </>
    ),
  },
  {
    title: "get.it",
    org: "Techsense",
    poster: {
      label: "professional networking · standalone service",
      lines: [
        "$ svc status get.it",
        "state        building",
        "integrates   job-platform mesh",
        "// details coming soon",
      ],
    },
    inProgress: true,
    privateRepo: true,
    tech: ["Python", "microservices", "TBD"],
    description:
      "A professional networking platform built as a new standalone service integrated into the existing job-platform infrastructure. Details coming soon.",
    modalContent: (
      <>
        <p>
          get.it is a professional networking platform I&apos;m currently
          engineering as a standalone service that plugs into Techsense&apos;s
          existing microservice infrastructure.
        </p>
        <p>
          More detail on this one soon — it&apos;s actively in progress.
        </p>
      </>
    ),
  },
  {
    title: "Facetime",
    imgSrc: "project-imgs/facetime.png",
    code: "https://github.com/AJonastech/videoapp",
    projectLink: "https://videoapp-murex.vercel.app/",
    tech: ["Next.js", "Stream SDK", "WebRTC", "Socket.io", "Tailwind CSS"],
    description:
      "A real-time video conferencing application with multi-user support and low-latency communications.",
    modalContent: (
      <>
        <p>
          Facetime is a sophisticated video conferencing platform built on Next.js and Stream Video SDK, enabling real-time communication with minimal latency.
        </p>
        <p>
          The application leverages WebRTC protocols for peer-to-peer connections and implements adaptive bitrate streaming to optimize video quality based on network conditions.
        </p>
        <p>
          Key features include end-to-end encryption, screen sharing capabilities, chat functionality.
        </p>
      </>
    ),
  },
  {
    title: "Padihold",
    imgSrc: "project-imgs/padihold.png",
    code: "https://github.com/AJonastech/padiHold",
    projectLink: "https://padi-hold.vercel.app",
    tech: ["Node.js", "Next.js", "Tailwind CSS", "Radix UI", "Framer Motion", "Zod", "Zustand"],
    description:
      "The Nigerian way to secure transactions. Nigeria's leading escrow platform. Secure your online transactions with trusted dispute resolution and fund protection.",
    inProgress: true,
    modalContent: (
      <>
        <p>
          Padihold is Nigeria&apos;s leading escrow platform designed to secure online transactions with trusted dispute resolution and fund protection.
        </p>
        <p>
          I developed this solution to address the unique trust challenges in Nigerian online commerce, creating a reliable third-party system that protects both buyers and sellers.
        </p>
        <p>
          The platform features secure payment holding, transparent transaction tracking, and an efficient dispute resolution process that gives users peace of mind when conducting business online.
        </p>
      </>
    ),
  },
  {
    title: "365Tax",
    imgSrc: "project-imgs/365tax.png",
    projectLink: "https://365tax.de",
    tech: ["Nextjs","Zustand", "Tailwindcss", "Tanstack query", "Shadcn UI"],
    description:
      "A comprehensive tax advisory and consulting platform for businesses and individuals in Germany, offering digital tax solutions and expert guidance.",
    privateRepo: true,
    modalContent: (
      <>
        <p>
          365Tax is a modern tax advisory platform focused on providing expert tax consulting services for businesses and individuals across Germany.
        </p>
        <p>
          The application features a responsive design with intuitive navigation, showcasing services like tax declarations, financial accounting, payroll accounting, and business consulting.
        </p>
        <p>
          I implemented multilingual support (German/English) and a streamlined contact system to connect users with tax professionals for personalized consultations.
        </p>
      </>
    ),
  },
  {
    title: "Allos Ai",
    imgSrc: "project-imgs/allosai.png",
    privateRepo: true,
    projectLink: "https://development.d2s1ad5lt18uie.amplifyapp.com/",
    tech: ["ReactJS", "Tailwindcss", "React Flow", "React Query", "Zustand", "Zod", "shadcn UI"],
    description:
      "A complex data analysis tool for causal discovery and inference, handling datasets with millions of rows and dozens of columns.",
    modalContent: (
      <>
        <p>
          Allos AI is a sophisticated data analysis platform that processes large-scale datasets with millions of rows and dozens of columns.
        </p>
        <p>
          I implemented advanced causal discovery and causal inference capabilities, allowing users to identify relationships between variables and make data-driven decisions.
        </p>
        <p>
          The application features an interactive graph tool built with React Flow canvas that enables users to visualize and manipulate complex data relationships dynamically.
        </p>
      </>
    ),
  },
  {
    title: "Vuhosi",
    imgSrc: "project-imgs/vuhosi.png",
    projectLink: "https://www.vuhosi.com/",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "React query"],
    description:
      "A modern digital platform for a premier consulting firm specializing in strategic business solutions.",
    privateRepo: true,
    modalContent: (
      <>
        <p>
          Vuhosi is a sophisticated web platform for a consulting company that delivers professional business solutions.
        </p>
        <p>
          The site features an elegant, responsive design with smooth animations and intuitive navigation to showcase the company&apos;s services and expertise.
        </p>
        <p>
          I implemented performance optimizations and SEO best practices to ensure excellent user experience and visibility.
        </p>
      </>
    ),
  }
];

