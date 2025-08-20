// src/components/Playlist.jsx
import React from "react";
import Navbar from "./Navbar";

const playlists = [
  { name: "Chill Vibes", tracks: "32 Tracks", image: "/chill.jpg" },
  { name: "Workout Pump", tracks: "24 Tracks", image: "/workout.jpg" },
  { name: "Afrobeats Party", tracks: "18 Tracks", image: "/afrobeats.jpg" },
  { name: "Late Night Jazz", tracks: "20 Tracks", image: "/jazz.jpg" },
];

export default function Playlist() {
  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/black-headphones.jpg')" }}
      ></div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-16">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-jomolhari text-center text-white mb-4 sm:mb-6 md:mb-8">
          Your Playlists
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-base sm:text-lg md:text-xl text-center max-w-xl sm:max-w-2xl md:max-w-3xl mb-8 sm:mb-10 md:mb-12">
          Create, collect, and curate. Whether you’re chasing vibes for a late-night drive or powering through a workout, your playlists live here.
        </p>

        {/* Playlist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-8 w-full max-w-7xl">
          {playlists.map((playlist, idx) => (
            <div
              key={idx}
              className="bg-[#0B0B0B] rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center shadow-lg relative transform transition-transform duration-300 hover:scale-105"
            >
              {/* Playlist Cover */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl border border-purple-900 overflow-hidden mb-3 sm:mb-4">
                <img
                  src={playlist.image}
                  alt={playlist.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Playlist Info */}
              <h2 className="text-lg sm:text-xl font-inder text-white">
                {playlist.name}
              </h2>
              <hr className="border-purple-900 w-32 sm:w-40 my-2 sm:my-3" />
              <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
                {playlist.tracks}
              </p>

              {/* CTA Button */}
              <button className="bg-brand text-white px-6 py-2 rounded-lg shadow-md font-inder cursor-pointer hover:bg-purple-800 transition">
                Open Playlist
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
