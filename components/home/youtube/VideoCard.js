import { Reveal } from "@/components/utils/Reveal";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "./youtube.module.scss";
import { FaYoutube, FaEye, FaThumbsUp } from "react-icons/fa";

export const VideoCard = ({
  id,
  title,
  description,
  thumbnail,
  publishedAt,
  views,
  likes
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const handleClick = () => {
    window.open(`https://www.youtube.com/watch?v=${id}`, '_blank');
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6 }}
      className={styles.videoCard}
      onClick={handleClick}
    >
      <div className={styles.thumbnailContainer}>
        <img 
          src={thumbnail} 
          alt={title} 
          className={styles.thumbnail}
        />
        <div className={styles.playButton}>
          <FaYoutube size="3rem" />
        </div>
      </div>
      
      <div className={styles.videoDetails}>
        <Reveal>
          <h4 className={styles.videoTitle}>{title}</h4>
        </Reveal>
        
        <Reveal>
          <p className={styles.videoDescription}>
            {description.length > 120 
              ? `${description.substring(0, 120)}...` 
              : description}
          </p>
        </Reveal>
        
        <div className={styles.videoStats}>
          <Reveal>
            <span className={styles.publishDate}>{publishedAt}</span>
          </Reveal>
          
          <div className={styles.viewsAndLikes}>
            <Reveal>
              <span className={styles.views}>
                <FaEye /> {views}
              </span>
            </Reveal>
            
            <Reveal>
              <span className={styles.likes}>
                <FaThumbsUp /> {likes}
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
