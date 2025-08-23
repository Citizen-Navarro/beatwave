import React from "react";
import Navbar from "./Navbar";

const Playlist = () => {
  const playlists = [
    { id: 1, name: "Lo-Fi Vibes", description: "Chill beats to relax/study", image: "/images/lofi.jpg" },
    { id: 2, name: "Workout Pump", description: "Energy-packed bangers", image: "/images/workout.jpg" },
    { id: 3, name: "Hip-Hop Classics", description: "Golden era hip-hop hits", image: "/images/hiphop.jpg" },
  ];

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Black headphones background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-100"
        style={{ backgroundImage: "url('/black-headphones.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Navbar (fixed) */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 md:px-12 pt-36 sm:pt-40 md:pt-44 pb-16 w-full max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-jomolhari text-center text-white mb-8 sm:mb-10 md:mb-12">
          Your Playlists
        </h1>

        {/* Playlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full">
          {/* Create New Playlist Card */}
          <div className="bg-[#0B0B0B] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center border-2 border-dashed border-[#4B4A4A] cursor-pointer hover:bg-[#0B0B0B]/90 transition-transform transform hover:scale-105">
            <span className="text-5xl font-bold text-[#4B4A4A] mb-4">+</span>
            <h2 className="text-xl font-inder text-[#4B4A4A] mb-2">Create New Playlist</h2>
            <p className="text-[#4B4A4A] text-sm">Start building your own custom mix.</p>
          </div>

          {/* Existing Playlists */}
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-[#0B0B0B] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:bg-[#0B0B0B]/90 transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => alert(`Clicked playlist: ${playlist.name}`)}
            >
              <img
                src={playlist.image}
                alt={playlist.name}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover rounded-xl mb-4 shadow-md"
              />
              <h2 className="text-xl font-inder text-white mb-2">{playlist.name}</h2>
              <p className="text-[#4B4A4A] text-sm">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
