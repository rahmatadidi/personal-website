import TikTokPreviewCard from './TikTokPreviewCard';

const VIDEOS = [
  {
    id: '7556162042248400148',
    thumbnail:
      'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765885001/thumbnail_dtlbpo.webp',
    preview:
      'https://res.cloudinary.com/ddfdf66n7/video/upload/v1765886561/final_tailwind_vidio_urgf33.mp4',
  },
  {
    id: '7553897039780678933',
    thumbnail: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765884178/REACT_fkq3tf.png',
    preview:
      'https://res.cloudinary.com/ddfdf66n7/video/upload/v1765885823/final_vidio_react_q2hngl.mp4',
  },
  {
    id: '7547668257713507602',
    thumbnail: 'https://res.cloudinary.com/ddfdf66n7/image/upload/v1765884169/Thumbnail_uepojo.png',
    preview: 'https://res.cloudinary.com/ddfdf66n7/video/upload/v1765885965/3_tag_html_zo3vny.mp4',
  },
];

export default function TikTokSection() {
  return (
    <section id="content" className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-10 max-w-2xl">
          <h2 className="mb-4 text-4xl">TikTok Content</h2>
          <p className="text-muted-foreground">Short-form video highlights from my TikTok</p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEOS.map((video) => (
            <TikTokPreviewCard
              key={video.id}
              videoId={video.id}
              username="rahmatadi.di"
              thumbnailUrl={video.thumbnail}
              previewUrl={video.preview}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.tiktok.com/@rahmatadi.di"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-lg
              border border-border
              px-6 py-3
              text-sm font-medium
              text-foreground
              bg-background
              transition
              hover:bg-accent
            "
          >
            {/* TikTok Icon */}
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M21 8.3c-1.3.1-2.6-.3-3.7-1.1-1.2-.8-2-2-2.3-3.4h-3.2v11.4c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7c.3 0 .6 0 .8.1V9.4c-.3 0-.5-.1-.8-.1-3.3 0-5.9 2.7-5.9 5.9S6.9 21 10.2 21s5.9-2.7 5.9-5.9V9.6c1.5 1 3.3 1.5 5.1 1.4V8.3z" />
            </svg>
            See more
          </a>
        </div>
      </div>
    </section>
  );
}
