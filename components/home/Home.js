import { ProfileHeader } from "./profile/ProfileHeader";
import { Section } from "./profile/Section";
import { ExperienceList } from "./profile/ExperienceList";
import { ProofOfWork } from "./profile/ProofOfWork";
import { Blogs } from "./profile/Blogs";
import { CurrentlyBuilding } from "./profile/CurrentlyBuilding";
import { GithubContributions } from "./profile/GithubContributions";
import { Stack } from "./profile/Stack";
import { EngineeringWork } from "./profile/EngineeringWork";
import styles from "./home.module.scss";

export const Home = () => {
  return (
    <div className={styles.shell}>
      {/* Diagonal hatch rails frame the centered column, as in the reference */}
      <div className={`${styles.rail} ${styles.railLeft}`} aria-hidden="true" />
      <div className={`${styles.rail} ${styles.railRight}`} aria-hidden="true" />


      <main className={styles.column}>
        <ProfileHeader />

        <Section label="Professional Experience" id="experience">
          <ExperienceList />
        </Section>

        <Section label="Proof of Work" id="projects">
          <ProofOfWork />
        </Section>

        <Section label="Blogs" id="blogs">
          <Blogs />
        </Section>

        <Section label="Currently Building" id="building">
          <CurrentlyBuilding />
        </Section>

        <Section label="GitHub Contributions" meta="@AJonastech" id="github">
          <GithubContributions />
        </Section>

        <Section label="Stack I use" id="stack">
          <Stack />
        </Section>

        <Section
          label="Selected Engineering Work"
          meta="Aug 2026"
          id="work"
        >
          <EngineeringWork />
        </Section>

        <footer className={styles.footer}>
          <span>Agu Jonas · Lagos, Nigeria</span>
          <a href="mailto:Agujonas13@gmail.com">Agujonas13@gmail.com</a>
        </footer>
      </main>
    </div>
  );
};
