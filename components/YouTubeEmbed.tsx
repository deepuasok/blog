'use client'

interface YouTubeEmbedProps {
  id: string
  title?: string
}

export function YouTubeEmbed({ id, title = 'YouTube video' }: YouTubeEmbedProps) {
  return (
    <div className="youtube-embed">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
