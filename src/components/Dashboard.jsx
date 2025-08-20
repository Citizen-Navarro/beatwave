import React from "react";
import Navbar from "./Navbar";

export default function Dashboard() {
  const cards = [
    { img: "/ai-generated-7926595_1280.jpg", label: "R&B" },
    { img: "/woman-6805178_1280.jpg", label: "Hip-Hop" },
    { img: "/headphones-3339483_1280.jpg", label: "Country" },
    { img: "/man-5859643_1280.jpg", label: "Radio Hits" },
  ];

  // Example click handler
  const handleCardClick = (label) => {
    alert(`You clicked on ${label}`);
    // Here you can add navigation logic, e.g.,
    // navigate(`/genre/${label.toLowerCase()}`);
  };

  return (
    <div
      className="min-h-screen w-full relative bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/black-headphones.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-0 mt-8 sm:mt-12">
        {/* Search Bar */}
        <div className="w-full sm:w-[756px] h-[60px] bg-[#0B0B0B] border border-[#4B4A4A] rounded-[30px] flex items-center px-4 mb-10 sm:mb-14">
          <input
            type="text"
            placeholder="Search by track, artist, or album…"
            className="w-full bg-transparent outline-none text-[#4B4A4A] text-[16px] sm:text-[20px] font-inder"
          />
          <img
            src="/search-line-1.png"
            alt="Search"
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-white font-jomolhari text-[36px] sm:text-[64px] leading-[42px] sm:leading-[76px] text-center whitespace-nowrap mb-3 sm:mb-5">
          Dive into a World of Infinite Sound
        </h1>

        {/* Subtitle */}
        <p className="text-graytext font-inder text-[16px] sm:text-[20px] leading-[20px] sm:leading-[25px] text-center max-w-[675px] mb-12 sm:mb-16">
          Discover tracks that move you, artists that surprise you, and sounds you didn’t know you needed.
        </p>

        {/* Cards */}
        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-6 pb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-[45%] sm:w-[245px] h-[200px] sm:h-[316px] rounded-[20px] hover:scale-105 hover:shadow-lg transition flex flex-col items-center justify-center cursor-pointer"
              onClick={() => handleCardClick(card.label)}
            >
              {/* Black background box behind the card image */}
              <div className="absolute inset-0 rounded-[20px] bg-black"></div>

              {/* Card Image with opacity */}
              <div
                className="absolute inset-0 rounded-[20px] bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url('${card.img}')` }}
              ></div>

              {/* Card Text */}
              <p className="relative text-white font-inder text-[20px] sm:text-[32px] text-center mb-2 sm:mb-4 z-10">
                {card.label}
              </p>

              {/* Play Icon below text */}
              <img
                src="/play-circle-line-1.png"
                alt="Play"
                className="relative w-8 h-8 sm:w-10 sm:h-10 z-10"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
