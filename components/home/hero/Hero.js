import { StandardButton } from "@/components/buttons/StandardButton";
import { OutlineButton } from "@/components/buttons/OutlineButton";
import { Reveal } from "@/components/utils/Reveal";
import { MeshHero } from "./MeshHero";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <MeshHero />
      <div className={styles.copyWrapper}>
        <Reveal>
          <div className={styles.kicker}>
            <span className="status-dot" />
            <span>systems · distributed · secure-by-default</span>
          </div>
        </Reveal>
        <Reveal>
          <h1 className={styles.title}>
            Agu Jonas<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            Software engineer building <span>distributed systems</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            I build the parts that have to stay up: service meshes, webhook
            pipelines, encryption boundaries, and vector search running against
            millions of records a day. I came up through the frontend, so I can
            still take a system all the way to a polished interface — but my
            center of gravity is the backend and the infrastructure under it.
          </p>
        </Reveal>
        <Reveal>
          <div className={styles.actions}>
            <StandardButton
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              Get in touch
            </StandardButton>
            <OutlineButton
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView()
              }
            >
              See the work
            </OutlineButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
