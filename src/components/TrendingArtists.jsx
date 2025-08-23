import React from "react";
import Navbar from "./Navbar";

const artists = [
  { name: "Drake", listeners: "83 million listeners", image: "/drake.jpeg" },
  { name: "Tyla", listeners: "83 million listeners", image: "/tyla.jpg" },
  { name: "Burna Boy", listeners: "83 million listeners", image: "/burna-boy.jpg" },
  { name: "Tems", listeners: "83 million listeners", image: "/tems.jpg" },
];

export default function TrendingArtists() {
  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-30"
        style={{ backgroundImage: "url('/black-headphones.jpg')" }}
      ></div>

      {/* Navbar (fixed) */}
      <div className="fixed top-0 left-0 w-full z-20 bg-black/40 backdrop-blur-md">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 md:px-12 pt-32 sm:pt-36 md:pt-40 pb-16">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-jomolhari text-center text-white mb-4 sm:mb-6 md:mb-8">
          This Week&apos;s Trending Artists
        </h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl text-center max-w-xl sm:max-w-2xl md:max-w-3xl mb-8 sm:mb-10 md:mb-12">
          Discover the most streamed, most loved, and most talked-about artists
          lighting up playlists across the globe. From underground gems to
          global chart-toppers — they’re all here.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-7xl">
          {artists.map((artist, idx) => (
            <div
              key={idx}
              className="bg-[#0B0B0B] rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center shadow-lg relative transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-purple-900 overflow-hidden mb-3 sm:mb-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg sm:text-xl font-inder text-white">
                {artist.name}
              </h2>
              <hr className="border-purple-900 w-32 sm:w-40 my-2 sm:my-3" />
              <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
                {artist.listeners}
              </p>
              <button className="bg-brand text-white px-6 py-2 rounded-lg shadow-md font-inder cursor-pointer hover:bg-purple-800 transition">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
