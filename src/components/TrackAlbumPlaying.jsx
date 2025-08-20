// src/components/TrackAlbumPlaying.jsx
import React from "react";
import Navbar from "./Navbar";

export default function TrackAlbumPlaying() {
  // Dummy content — swap with real data later
  const track = {
    title: "IS IT",
    artist: "Tyla",
    album: "We Wanna Party",
    streams: "1,033,487 Streams",
    cover: "/is-it.jpg", // ensure this exists in /public
    about:
      "Discover tracks that move you, artists that surprise you, and sounds you didn’t know you needed. From underground gigs to global stages, her journey reflects passion, grit, and undeniable talent.",
  };

  return (
    <div
      className="relative min-h-screen w-full bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/black-headphones.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-8 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-40">
        {/* Page Title */}
        <h1 className="font-jomolhari text-white text-3xl sm:text-4xl md:text-6xl text-center mb-8">
          Track / Album
        </h1>

        {/* Big container card */}
        <section className="mx-auto w-full max-w-7xl bg-[#0B0B0B] rounded-2xl p-5 sm:p-6 md:p-8">
          {/* Top grid: cover + details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left: Large cover (left-aligned) */}
            <div>
              <div className="rounded-2xl bg-[#4B4A4A] overflow-hidden w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[476px] lg:h-[476px]">
                <img
                  src={track.cover}
                  alt={`${track.title} cover`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Details stacked */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              <h2 className="font-jomolhari text-white text-3xl sm:text-4xl md:text-6xl leading-tight">
                {track.title}
              </h2>

              <div className="space-y-2">
                <p className="text-white font-inder text-2xl sm:text-3xl">Artist</p>
                <p className="text-white/90 font-inder text-lg sm:text-xl">
                  {track.artist}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-white font-inder text-2xl sm:text-3xl">Album</p>
                <p className="text-white/90 font-inder text-lg sm:text-xl">
                  {track.album}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-white font-inder text-2xl sm:text-3xl">Streams</p>
                <p className="text-[#4B4A4A] font-inder text-xl sm:text-2xl">
                  {track.streams}
                </p>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button className="bg-brand text-white px-6 py-2 rounded-lg shadow-md font-inder cursor-pointer hover:bg-purple-800 transition">
                  Play
                </button>
                <button className="bg-black/60 border border-brand text-white px-5 py-2 rounded-lg font-inder cursor-pointer hover:bg-black/40 transition">
                  Add to Playlist
                </button>
                <button className="bg-black/60 border border-brand text-white px-5 py-2 rounded-lg font-inder cursor-pointer hover:bg-black/40 transition">
                  Like
                </button>
              </div>
            </div>
          </div>

          {/* Full-width About section (left-aligned with cover) */}
          <div className="mt-10 lg:mt-12">
            <h3 className="text-white font-inder text-2xl sm:text-3xl mb-3">
              About the Artist
            </h3>
            <p className="text-[#4B4A4A] font-inder text-base sm:text-lg leading-relaxed">
              {track.about}
            </p>
          </div>
        </section>
      </main>

      {/* Now Playing Bar */}
      <NowPlayingBar />
    </div>
  );
}

/** Bottom player bar */
function NowPlayingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20">
      <div className="mx-auto w-[90%] max-w-6xl bg-black/80 backdrop-blur border border-brand rounded-xl px-4 sm:px-6 py-3 sm:py-4 mb-4">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="text-white hover:text-brand transition">⏮</button>
            <button className="bg-brand text-white px-4 py-1.5 rounded-lg hover:bg-purple-800 transition">
              Play
            </button>
            <button className="text-white hover:text-brand transition">⏭</button>
            <button className="hidden sm:inline text-white hover:text-brand transition">🔀</button>
            <button className="hidden sm:inline text-white hover:text-brand transition">🔁</button>
          </div>

          {/* Progress */}
          <div className="flex-1 mx-2 sm:mx-4 flex items-center gap-2">
            <span className="hidden sm:inline text-white text-sm">02:12</span>
            <div className="flex-1 h-1.5 bg-[#4B4A4A] rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-brand"></div>
            </div>
            <span className="hidden sm:inline text-white text-sm">03:45</span>
          </div>

          {/* Volume */}
          <div className="hidden sm:flex items-center gap-2 w-40">
            <span className="text-white">🔊</span>
            <div className="flex-1 h-1.5 bg-[#4B4A4A] rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-brand"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
