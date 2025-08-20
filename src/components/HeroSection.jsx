export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="font-jomolhari text-white text-4xl sm:text-5xl md:text-[64px] leading-tight md:leading-[76px]">
          <span className="block">Stream. Discover.</span>
          <span className="block">Vibe.</span>
        </h2>
        <p className="mt-4 text-graytext text-base sm:text-lg md:text-[20px] leading-relaxed font-inder">
          The simplest way to find and play your favorite tracks. No fluff.
        </p>
        <button className="mt-6 bg-brand text-white px-6 sm:px-8 py-2 rounded-lg font-inder text-lg sm:text-[20px] shadow-md cursor-pointer hover:bg-purple-800 transition">
          Try Now
        </button>
      </div>
    </section>
  );
}
