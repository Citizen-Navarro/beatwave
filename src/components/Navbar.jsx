export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-[90%] mx-auto mt-4 px-6 py-4 border border-brand rounded-lg bg-black relative z-10">
      {/* Logo Image */}
      <img src="/BeatWave.png" alt="BeatWave Logo" className="h-10 w-auto" />

      {/* Links */}
      <div className="flex gap-8 text-white font-inder text-[20px]">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
      </div>

      {/* Auth buttons */}
      <div className="flex gap-4 items-center">
        <button className="text-white font-inder">Log in</button>
        <button className="bg-brand text-white px-6 py-2 rounded-lg shadow-md font-inder">
          Sign up
        </button>
      </div>
    </nav>
  );
}
