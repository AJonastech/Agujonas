import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Jonas<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
        <h2 className={styles.subTitle}>
            I&apos;m a <span>FronteEnd Developer</span>
          </h2>
        </Reveal>
        <Reveal>
        <p className={styles.aboutCopy}>
           With two years of experience under my belt, I love crafting amazing things on the web. From pixel-perfect designs to seamless interactions, I bring websites to life with a sprinkle of magic. Join me on this exciting journey of turning ideas into eye-catching digital experiences. Let&apos;s create something awesome together!
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
