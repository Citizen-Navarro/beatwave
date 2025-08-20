import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureCard from "./FeatureCard";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen w-full bg-black bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/black-headphones.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="flex flex-col items-center mt-8 sm:mt-12 px-4 sm:px-6 md:px-12">
          <HeroSection />
        </div>

        {/* Features Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-white">
            Why Choose Us
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <FeatureCard
              iconImg="/search-line-1.png"
              title="Instant Track Search"
              description="Find any song, artist, or album in seconds using fast and reliable search powered by Deezer."
            />
            <FeatureCard
              iconImg="/play-circle-line-1.png"
              title="30-Second Previews"
              description="Preview songs with a single tap — no login, no delays. Just press play and vibe."
            />
            <FeatureCard
              iconImg={["/smartphone-line-1.png", "/computer-line-1.png"]}
              title="Mobile-First Design"
              description="Whether you’re on desktop or mobile, BeatWave’s clean interface keeps the music flowing."
            />
          </div>
        </section>
      </div>
    </div>
  );
}
