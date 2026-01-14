"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"

interface VideoPlayerProps {
  youtubeUrl: string
  title?: string
}

export default function VideoPlayer({ youtubeUrl, title }: VideoPlayerProps) {
  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const videoId = getYouTubeVideoId(youtubeUrl)

  if (!videoId) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">Invalid YouTube URL</p>
      </div>
    )
  }

  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title || "YouTube video player"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full rounded-lg"
      />
    </AspectRatio>
  )
}
