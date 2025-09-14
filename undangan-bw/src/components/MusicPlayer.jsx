"use client";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const unlock = () => {
      if (!playing && audioRef.current) {
        audioRef.current.play().then(() => setPlaying(true)).catch(()=>{});
      }
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };
    window.addEventListener("click", unlock);
    window.addEventListener("touchstart", unlock);
    return () => {
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, [playing]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play().then(()=>setPlaying(true)).catch(()=>{}); }
  };

  return (
    <>
      <audio ref={audioRef} src="/song.mp3" loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="fixed right-4 bottom-4 z-50 h-12 w-12 rounded-full border border-white/20 bg-white/5 backdrop-blur 
                   hover:bg-white/10 transition shadow-glow flex items-center justify-center"
      >
        {playing ? "⏸" : "▶️"}
      </button>
    </>
  );
}
