import React, { useState } from "react";
import Navbar from "./Navbar";

const results = [
  { track: "IS IT", artist: "Tyla", album: "We Wanna Party", cover: "/is-it.jpg" },
  { track: "Track 2", artist: "Artist 2", album: "Album 2", cover: "/placeholder.jpg" },
  { track: "Track 3", artist: "Artist 3", album: "Album 3", cover: "/placeholder.jpg" },
  { track: "Track 4", artist: "Artist 4", album: "Album 4", cover: "/placeholder.jpg" },
];

export default function SearchResults() {
  const [activeFilter, setActiveFilter] = useState("Tracks");
  const filters = ["Tracks", "Artists", "Albums"];

  return (
    <div
      className="relative min-h-screen w-full bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/black-headphones.jpg')" }}
    >
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Page Header */}
      <div className="relative z-10 flex flex-col items-center pt-24 sm:pt-28 md:pt-32 px-4 sm:px-8 md:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-jomolhari text-white text-center mb-6">
          Search Results
        </h1>

        {/* Filter Bar */}
        <div className="flex gap-4 bg-[#0B0B0B] rounded-xl p-1 sm:p-2 md:p-3 shadow-inner">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-1 sm:py-2 rounded-lg font-inder text-sm md:text-base transition cursor-pointer ${
                activeFilter === filter
                  ? "bg-brand text-white hover:bg-purple-800"
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 px-4 sm:px-8 md:px-12 mt-8 pb-40">
        {results.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#0B0B0B] rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-lg overflow-hidden mb-3 sm:mb-4">
              <img src={item.cover} alt={item.track} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-lg sm:text-xl font-inder text-white">{item.track}</h2>
            <p className="text-gray-500 text-xs sm:text-sm">{item.artist}</p>
            <p className="text-gray-500 text-xs sm:text-sm mb-4">{item.album}</p>
            <button className="bg-brand text-white px-6 py-2 rounded-lg shadow-md font-inder cursor-pointer hover:bg-purple-800 transition">
              Play
            </button>
          </div>
        ))}
      </div>

      {/* Sticky Now Playing Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-[#0B0B0B]/95 backdrop-blur-md z-20 border-t border-gray-800 flex items-center justify-between px-4 sm:px-8 py-2 sm:py-3">
        {/* Track Info */}
        <div className="flex items-center gap-3 sm:gap-4">
          <img src="/is-it.jpg" alt="Now Playing" className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover" />
          <div className="flex flex-col">
            <span className="text-white font-inder text-sm sm:text-base">IS IT</span>
            <span className="text-gray-500 text-xs sm:text-sm">Tyla</span>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-purple-800 transition">&#9664;</button>
            <button className="bg-brand text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-purple-800 transition">▶</button>
            <button className="text-white hover:text-purple-800 transition">&#9654;</button>
          </div>
          {/* Progress Bar */}
          <div className="flex items-center gap-2 text-xs sm:text-sm mt-1 w-full max-w-[300px] sm:max-w-[400px]">
            <span className="text-gray-500">0:00</span>
            <div className="h-1 bg-gray-700 rounded-full flex-1">
              <div className="h-1 bg-brand rounded-full w-[25%]"></div>
            </div>
            <span className="text-gray-500">2:15</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <span className="text-white">&#128266;</span>
          <div className="h-1 w-24 bg-gray-700 rounded-full relative">
            <div className="h-1 bg-brand rounded-full w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
