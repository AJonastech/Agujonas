import Link from "next/link";
import styles from "./blogs.module.scss";
import { FiArrowUpRight } from "react-icons/fi";

// Placeholder posts — swap title/href for your real writing. The `#` hrefs
// render as disabled ("Draft") until you fill them in.
const posts = [
  {
    title: "Fanning webhooks out to 30+ services without dropping a request",
    href: "#",
  },
  {
    title: "Real-time job classification against O*NET with vector search",
    href: "#",
  },
  {
    title: "Encryption boundaries in a proxy: what to encrypt, and where",
    href: "#",
  },
];

export const Blogs = () => {
  return (
    <div className={styles.list}>
      {posts.map((post) => {
        const isDraft = !post.href || post.href === "#";
        return (
          <div key={post.title} className={styles.row}>
            <span className={styles.title}>{post.title}</span>
            {isDraft ? (
              <span className={styles.draft}>Draft</span>
            ) : (
              <Link
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className={styles.open}
              >
                Open <FiArrowUpRight />
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};
