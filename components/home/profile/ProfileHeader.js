import { useState } from "react";
import Link from "next/link";
import styles from "./profile.module.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiPaperclip } from "react-icons/fi";
import { ThemeToggle } from "./ThemeToggle";

// Cover banner + avatar + name/role/socials + bio. Mirrors the reference
// header: a full-bleed cover with an italic tagline, an avatar overlapping
// the bottom edge, then identity + intro copy below.
export const ProfileHeader = () => {
  return (
    <header className={styles.profileHeader}>
      <div className={styles.cover}>
        {/* Static cover — set the background-image in
            profile.module.scss (.cover). */}
      </div>

      <div className={styles.identityRow}>
        <div className={styles.avatarWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/profile.PNG" alt="Agu Jonas" className={styles.avatar} />
        </div>
      </div>

      <div className={styles.identity}>
        <div className={styles.identityText}>
          <h1 className={styles.name}>Agu Jonas</h1>
          <p className={styles.role}>
            Systems Engineer · Distributed systems &amp; infrastructure
          </p>
        </div>
        <div className={styles.identityActions}>
          <div className={styles.socialIcons}>
            <Link
              href="https://github.com/AJonastech"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub size="2rem" />
            </Link>
            <Link
              href="/My_resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
            >
              <FiPaperclip size="1.8rem" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/agu-jonas-211a651b6/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin size="2rem" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bio}>
        <p>
        Senior Software Engineer with a track record of building resilient, distributed systems: from webhook proxy services and encrypted request pipelines to embedding-based semantic search across millions of job listings. I work comfortably across the stack, but I especially enjoy solving hard backend and infrastructure problems: service orchestration, secure data flows, and systems that need to scale without breaking. <span className={styles.bioLink}> Currently building Quiqorder.</span>
        </p>
      </div>
    </header>
  );
};