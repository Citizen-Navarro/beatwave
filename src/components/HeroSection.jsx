export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-24">
      {/* Left Content */}
      <div className="max-w-lg">
        <h2 className="font-jomolhari text-white text-[64px] leading-[76px]">
          <span className="block">Stream. Discover.</span>
          <span className="block">Vibe.</span>
        </h2>
        <p className="mt-4 text-graytext text-[20px] leading-[25px] font-inder">
          The simplest way to find and play your favorite tracks. No fluff.
        </p>
        <button className="mt-4 bg-brand text-white px-8 py-3 rounded-lg font-inder text-[20px] shadow-md">
          Try Now
        </button>
      </div>

      {/* Removed Hero Image to rely on background */}
    </section>
  );
}
