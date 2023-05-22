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
    title: "FrenBox",
    position: "Frontend Developer",
    time: "2022 - Present",
    location: "Akure, Ondo",
    description:
      "I help build and manage the web user interface with a team of other wonderful developers",
    tech: [
      "Next",
      "React",
      "Typescript",
      "React Query",
      "Styled components",
    ],
  },
  {
    title: "BMHM",
    position: "Volunteer Frontend Engineer",
    time: "2022-present",
    location: "Remote",
    description:
      "Frontend Engineer, helping to build wonderful products for the black community",
    tech: ["React", "typescript", "tailwindcss", "react router", "Material Ui"],
  }
];
