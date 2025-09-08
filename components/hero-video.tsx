"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  poster?: string
  className?: string
  src?: string // optional, defaults to /shelom.mp4
  onOpacityChange?: (scrolledPastAbout: boolean) => void
}

export default function HeroVideo({
  poster = "/manufacturing-video-poster.png",
  className = "",
  src = "/shelom.mp4",
  onOpacityChange,
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    // Defer setting src until in view
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !video.src) {
            video.src = src
            video.play().catch(() => {})
          }
        })
      },
      { rootMargin: "200px 0px" },
    )

    io.observe(video)
    return () => io.disconnect()
  }, [src])

  useEffect(() => {
    const onLoaded = () => setLoaded(true)
    ref.current?.addEventListener("loadeddata", onLoaded)
    return () => ref.current?.removeEventListener("loadeddata", onLoaded)
  }, [])

  useEffect(() => {
    const about = document.getElementById("about")
    if (!about || !onOpacityChange) return

    const io = new IntersectionObserver(
      (entries) => {
        onOpacityChange(entries[0].isIntersecting)
      },
      { threshold: 0.2 },
    )
    io.observe(about)
    return () => io.disconnect()
  }, [onOpacityChange])

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      playsInline
      muted
      loop
      // Performance
      preload="metadata"
      controls={false}
      aria-label="Manufacturing background video"
    />
  )
}
