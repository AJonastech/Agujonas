import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Jonas, if you haven&apos;t already gathered that by
              now. I am a frontend developer from lagos, Nigeria.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I have gained about two years of experience working with several teams to build a variety of products, ranging from e-commerce and healthcare to file management systems.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              In addition to my professional work, I am also passionate about contributing to the community, which is why I have volunteered with several organizations, including the Black Mental Health Matters organization
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m actively looking for new positions where I can use my
              love for code to solve real problems. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
