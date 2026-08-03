import styles from "./heading.module.scss";
import { MyLinks } from "./components/MyLinks";
import { OutlineButton } from "../buttons/OutlineButton";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <div className={styles.left}>
        <MyLinks />
        <span className={styles.live}>
          <span className="status-dot" />
          <span className={styles.liveLabel}>available for work</span>
        </span>
      </div>
      <OutlineButton onClick={() => window.open("/My_resume.pdf")}>
        My resume
      </OutlineButton>
    </header>
  );
};
