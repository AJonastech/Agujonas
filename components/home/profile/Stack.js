import styles from "./stack.module.scss";
import {
  SiPython,
  SiTypescript,
  SiGo,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiNodedotjs,
  SiKubernetes,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiAmazon,
  SiGit,
  SiTailwindcss,
} from "react-icons/si";

const stack = [
  { name: "Python", Icon: SiPython },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Go", Icon: SiGo },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Django", Icon: SiDjango },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "Docker", Icon: SiDocker },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Redis", Icon: SiRedis },
  { name: "AWS", Icon: SiAmazon },
  { name: "Git", Icon: SiGit },
  { name: "Tailwind", Icon: SiTailwindcss },
];

export const Stack = () => {
  // Duplicate the list so the marquee can loop seamlessly: the track scrolls
  // exactly one list-width (-50%) before the copy takes over, then resets.
  const marquee = [...stack, ...stack];
  return (
    <>
      <p className={styles.lead}>
        Technologies I work with to build systems that stay up.
      </p>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {marquee.map(({ name, Icon }, i) => (
            <div key={`${name}-${i}`} className={styles.item} title={name}>
              <Icon className={styles.icon} />
              <span className={styles.label}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
