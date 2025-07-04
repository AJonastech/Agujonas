import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { VideoCard } from "./VideoCard";
import styles from "./youtube.module.scss";

export const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchYoutubeVideos = async () => {
      try {
        // You'll need to replace this with your actual channel ID and API key
        const channelId = "YOUR_CHANNEL_ID";
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
      
      {loading && <div className={styles.loading}>Loading videos...</div>}
      
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.channelInfo}>
        <img 
          src="YOUR_CHANNEL_LOGO_URL" 
          alt="Channel Logo" 
          className={styles.channelLogo}
        />
        <div className={styles.channelDetails}>
          <h3>Your Channel Name</h3>
          <p>Teaching web engineering concepts, tips, and best practices</p>
          <a 
            href="https://youtube.com/c/YOUR_CHANNEL_URL" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.subscribeButton}
          >
            Subscribe
          </a>
        </div>
      </div>

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
    description: "Learn how to set up and build a React application using TypeScript for type safety.",
    thumbnail: "/youtube-imgs/video1.jpg",
    publishedAt: "2023-10-15",
    views: "1,200",
    likes: "85"
  },
  {
    id: "video2",
    title: "Next.js API Routes Explained",
    description: "A complete guide to using API routes in Next.js applications.",
    thumbnail: "/youtube-imgs/video2.jpg",
    publishedAt: "2023-09-22",
    views: "980",
    likes: "72"
  },
  // Add more fallback videos as needed
];
