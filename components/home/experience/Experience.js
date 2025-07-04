import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "365Tax.de",
    position: "Senior Frontend Engineer",
    time: "Dec 2024 - Present",
    location: "Freelance",
    description:
      "Designing and implementing banking and invoice automation systems for self-employed users and SMEs, with FinAPI integration for real-time financial insights.",
    tech: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "Tanstack Query",
      "Tailwind CSS",
      "FinAPI Integration",
    ],
  },
  {
    title: "Allos AI",
    position: "Frontend Developer",
    time: "Oct 2024 - Mar 2025",
    location: "Freelance",
    description:
      "Delivered a sophisticated causal inference platform within 4 weeks, building complex data tooling, graph editors, and causal discovery interfaces that exceeded performance expectations.",
    tech: [
      "React",
      "TypeScript",
      "React Flow",
      "React Query",
      "Zustand",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    title: "Vuhosi",
    position: "Founding Engineer",
    time: "Mar 2024 - Oct 2024",
    location: "Freelance",
    description:
      "Designed and implemented the full frontend architecture for an investment analysis platform, optimizing data rendering pipelines and visualizations to achieve a 4× increase in analyst throughput.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
    ],
  }
];
