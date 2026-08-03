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
              I&apos;m Agu Jonas, a software engineer based in Lagos, Nigeria.
              These days I spend most of my time in the backend and the
              infrastructure under it.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              At Techsense I maintain and build across a distributed system of
              34 microservices powering a job-aggregation platform that
              processes millions of listings a day, orchestrated on Kubernetes
              across staging and production. I designed a webhook proxy service
              that receives inbound requests and fans them out to configured
              downstream services — handling the encryption on the way in and
              decryption on the way out — and built an embedding-based semantic
              matching system that classifies incoming listings against O*NET
              occupation codes in real time using vector search.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I got here through the frontend, and I haven&apos;t left it behind.
              I&apos;ve shipped banking and invoice automation for SMEs across
              Europe (FinAPI, Stripe, ZUGFeRD/XRechnung), built causal-inference
              tooling and nodal network visualizations for a pharma AI platform,
              and maintained accessible UI for a mental-health platform. That
              range is the point: I can reason about a system from the service
              mesh all the way out to the interface.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I care about systems that stay up, data that stays secure, and code
              that the next person can actually read. Open to engineering roles
              where that matters. Let&apos;s connect 🔗
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
