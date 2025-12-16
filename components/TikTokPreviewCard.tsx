'use client';

import { useRef } from 'react';

interface TikTokPreviewCardProps {
  videoId: string;
  thumbnailUrl: string;
  previewUrl: string;
  username: string;
}

export default function TikTokPreviewCard({
  videoId,
  thumbnailUrl,
  previewUrl,
  username,
}: TikTokPreviewCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <a
      href={`https://www.tiktok.com/@${username}/video/${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (!videoRef.current) return;
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }}
      className="
        group
        relative
        aspect-9/16
        w-full
        overflow-hidden
        rounded-lg
        border border-border
        bg-card
        shadow-sm
        transition
        hover:shadow-md
      "
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt="TikTok thumbnail"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          transition-opacity duration-200
          group-hover:opacity-0
        "
        loading="lazy"
      />

      {/* Play Button Overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          flex items-center justify-center
          transition-opacity duration-200
          group-hover:opacity-0
        "
      >
        <div
          className="
            flex items-center justify-center
            h-16 w-16
            rounded-full
            bg-black/40
            backdrop-blur-sm
            shadow-lg
          "
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-white ml-1" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Hover Preview Video */}
      <video
        ref={videoRef}
        src={previewUrl}
        muted
        loop
        playsInline
        preload="none"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          opacity-0
          transition-opacity duration-200
          group-hover:opacity-100
        "
      />
    </a>
  );
}
