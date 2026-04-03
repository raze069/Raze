import { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface CustomYouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  isActive?: boolean;
}

export default function CustomYouTubeEmbed({ videoId, title = "YouTube video", className = "", isActive = true }: CustomYouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setIsLoaded(false);
    }
  }, [isActive]);

  return (
    <div 
      className={`relative group cursor-pointer overflow-hidden bg-black ${className}`}
      onClick={() => setIsLoaded(true)}
    >
      {!isLoaded ? (
        <>
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.includes('maxresdefault')) {
                target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }
            }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300 shadow-2xl">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1.5" fill="currentColor" />
            </div>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`}
          title={title}
          className="w-full h-full border-0 absolute inset-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
