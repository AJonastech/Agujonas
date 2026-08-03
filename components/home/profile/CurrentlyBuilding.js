import Link from "next/link";
import styles from "./building.module.scss";
import { FiExternalLink } from "react-icons/fi";

const items = [
  {
    name: "Quiqorder",
    logo: "/QO_logo.webp",
    accent: "#4fd1a0",
    description:
      "A WhatsApp-first social-commerce platform — storefront, automated chats and Status posts, payments, and order management from one dashboard. Sell on WhatsApp even while you sleep.",
    href: "https://www.tryquiqorder.com/",
  },
  {
    name: "Padihold",
    logo: "/project-imgs/padihold.png",
    accent: "#e0a05c",
    description:
      "Nigeria's escrow platform — secure transaction holding with trusted dispute resolution and fund protection.",
    href: "https://padi-hold.vercel.app",
  },
];

export const CurrentlyBuilding = () => {
  return (
    <div className={styles.grid}>
      {items.map((item) => {
        const inner = (
          <>
            <span className={styles.logo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.logo} alt={item.name} className={styles.logoImg} />
            </span>
            <span className={styles.text}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.desc}>{item.description}</span>
            </span>
            {item.href && <FiExternalLink className={styles.icon} />}
          </>
        );
        return item.href ? (
          <Link
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            {inner}
          </Link>
        ) : (
          <div key={item.name} className={styles.card}>
            {inner}
          </div>
        );
      })}
    </div>
  );
};
