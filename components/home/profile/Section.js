import styles from "./section.module.scss";

// A labeled block: muted section label + faint divider, matching the
// reference ("Professional Experience", "Proof of Work", etc.).
export const Section = ({ label, meta, children, id }) => {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.sectionHead}>
        <span className={styles.sectionLabel}>{label}</span>
        {meta && <span className={styles.sectionMeta}>{meta}</span>}
      </div>
      {children}
    </section>
  );
};
