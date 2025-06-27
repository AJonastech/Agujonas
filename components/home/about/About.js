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
              Hey! I&apos;m Jonas if you haven&apos;t already gathered that by
              now. I am a JavaScript engineer based in Lagos, Nigeria.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              For the past four years, I’ve helped startups and teams across
              industries build reliable, user-focused software using JavaScript.
              My focus has been on modern web interfaces, and my work spans
              mental health platforms, fintech dashboards, file collaboration
              tools, and more. While my expertise lies in frontend development,
              I have collaborated closely with backend teams to deliver complete
              solutions.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I’ve led frontend architecture on client projects, contributed to
              design systems, and occasionally worked across the stack when the
              product demanded it. I care deeply about writing clean,
              maintainable code and delivering features that solve real
              problems.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I’m currently open to engineering roles or contracts where I can
              use my JavaScript expertise to build meaningful products and grow
              with a collaborative team. Let’s connect 🔗
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
