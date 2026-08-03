import { Reveal } from "@/components/utils/Reveal";
import styles from "./experience.module.scss";

export const ExperienceItem = ({
  title,
  position,
  time,
  location,
  description,
  tech,
  current,
}) => {
  return (
    <div className={styles.experience}>
      {/* Rail node — pulses on the current role, like a live commit */}
      <span
        className={`${styles.node} ${current ? styles.nodeCurrent : ""}`}
        aria-hidden="true"
      />
      <div className={styles.body}>
        <div className={styles.heading}>
          <Reveal>
            <span className={styles.title}>{title}</span>
          </Reveal>
          <Reveal>
            <span className={styles.time}>{time}</span>
          </Reveal>
        </div>

        <div className={styles.subheading}>
          <Reveal>
            <span className={styles.position}>{position}</span>
          </Reveal>
          <Reveal>
            <span className={styles.location}>{location}</span>
          </Reveal>
        </div>
        <Reveal>
          <p className={styles.description}>{description}</p>
        </Reveal>
        <Reveal>
          <div className={styles.tech}>
            {tech.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};
