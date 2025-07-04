import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { VideoCard } from "./VideoCard";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./youtube.module.scss";

export const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchYoutubeVideos = async () => {
      try {
        // You'll need to replace this with your actual channel ID and API key
        const channelId = "UCQ_HfH8hMpgMJWk1Ppyn2WA";
        const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
        const maxResults = 6; // Number of videos to display

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }

        const data = await response.json();
        
        // Get video statistics (views, likes)
        const videoIds = data.items.map(item => item.id.videoId).join(',');
        const statsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`
        );
        
        if (!statsResponse.ok) {
          throw new Error("Failed to fetch video statistics");
        }
        
        const statsData = await statsResponse.json();
        
        // Combine video details with statistics
        const videosWithStats = data.items.map(video => {
          const stats = statsData.items.find(item => item.id === video.id.videoId);
          return {
            id: video.id.videoId,
            title: video.snippet.title,
            description: video.snippet.description,
            thumbnail: video.snippet.thumbnails.high.url,
            publishedAt: new Date(video.snippet.publishedAt).toLocaleDateString(),
            views: stats ? Number(stats.statistics.viewCount).toLocaleString() : "0",
            likes: stats ? Number(stats.statistics.likeCount).toLocaleString() : "0"
          };
        });
        
        setVideos(videosWithStats);
      } catch (err) {
        console.error("Error fetching YouTube videos:", err);
        setError("Failed to load videos. Using fallback data.");
        // Fallback to static data if API fails
        setVideos(fallbackVideos);
      } finally {
        setLoading(false);
      }
    };

    fetchYoutubeVideos();
  }, []);

  return (
    <section className="section-wrapper" id="youtube">
      <SectionHeader title="YouTube Tutorials" dir="r" />
      
      <div className={styles.introText}>
        <Reveal>
          <p className={styles.aboutText}>
            <span className={styles.highlight}>I also teach web engineering</span> on YouTube! Check out some of my tutorials below and subscribe to catch my latest content.
          </p>
        </Reveal>
      </div>
      
      {loading && <div className={styles.loading}>Loading videos...</div>}
      
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </section>
  );
};

// Fallback data in case the API fails
const fallbackVideos = [
  {
    id: "video1",
    title: "Building a React App with TypeScript",
    description: "In this comprehensive tutorial, I walk through setting up a complete React application with TypeScript for type safety, explaining the benefits of static typing and how to structure your components for maximum reusability.",
    thumbnail: "/youtube-imgs/video1.jpg",
    publishedAt: "2023-10-15",
    views: "1,200",
    likes: "85"
  },
  {
    id: "video2",
    title: "Next.js API Routes Explained",
    description: "Learn how to create and use API routes in Next.js applications to build powerful full-stack applications. I cover request handling, route parameters, API middleware, and connecting to databases.",
    thumbnail: "/youtube-imgs/video2.jpg",
    publishedAt: "2023-09-22",
    views: "980",
    likes: "72"
  },
  {
    id: "video3",
    title: "React Performance Optimization Techniques",
    description: "Discover advanced techniques to optimize your React applications for better performance. We'll explore memo, useCallback, useMemo, code splitting, and other strategies to make your apps lightning fast.",
    thumbnail: "/youtube-imgs/video3.jpg",
    publishedAt: "2023-08-17",
    views: "1,540",
    likes: "126"
  },
  {
    id: "video4",
    title: "Building a Custom React Hook",
    description: "In this tutorial, I demonstrate how to create custom React hooks to encapsulate and reuse stateful logic across components. We'll build several practical hooks you can use in your own projects.",
    thumbnail: "/youtube-imgs/video4.jpg",
    publishedAt: "2023-07-29",
    views: "890",
    likes: "64"
  },
  {
    id: "video5",
    title: "State Management with Zustand",
    description: "Learn how to use Zustand, a minimalistic state management library for React that offers a simpler alternative to Redux. We'll build a complete application with global state management from scratch.",
    thumbnail: "/youtube-imgs/video5.jpg",
    publishedAt: "2023-06-12",
    views: "2,100",
    likes: "178"
  },
  {
    id: "video6",
    title: "Building Responsive Layouts with Tailwind CSS",
    description: "In this hands-on session, I demonstrate how to build beautiful, responsive interfaces with Tailwind CSS. Learn about utility-first CSS, responsive design, and component composition for modern web applications.",
    thumbnail: "/youtube-imgs/video6.jpg",
    publishedAt: "2023-05-03",
    views: "1,750",
    likes: "142"
  }
];

