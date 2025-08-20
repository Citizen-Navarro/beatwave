import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-[90%] mx-auto mt-4 px-6 py-4 border border-brand rounded-lg bg-black relative z-10">
      {/* Logo Image */}
      <img
        src="/BeatWave.png"
        alt="BeatWave Logo"
        className="h-10 w-auto cursor-pointer hover:opacity-80 transition"
      />

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-white font-inder text-[20px]">
        <a href="#" className="cursor-pointer hover:text-brand transition">Home</a>
        <a href="#" className="cursor-pointer hover:text-brand transition">Explore</a>
        <a href="#" className="cursor-pointer hover:text-brand transition">Pricing</a>
        <a href="#" className="cursor-pointer hover:text-brand transition">About</a>
      </div>

      {/* Desktop Auth buttons */}
      <div className="hidden md:flex gap-4 items-center">
        <button className="text-white font-inder cursor-pointer hover:text-brand transition">
          Log in
        </button>
        <button className="bg-brand text-white px-6 py-2 rounded-lg shadow-md font-inder cursor-pointer hover:bg-purple-800 transition">
          Sign up
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-brand flex flex-col items-center py-4 gap-6 md:hidden">
          <a href="#" className="text-white font-inder text-lg hover:text-brand transition">Home</a>
          <a href="#" className="text-white font-inder text-lg hover:text-brand transition">Explore</a>
          <a href="#" className="text-white font-inder text-lg hover:text-brand transition">Pricing</a>
          <a href="#" className="text-white font-inder text-lg hover:text-brand transition">About</a>
          <button className="text-white font-inder cursor-pointer hover:text-brand transition">
            Log in
          </button>
          <button className="bg-brand text-white px-6 py-2 rounded-lg shadow-md font-inder cursor-pointer hover:bg-purple-800 transition">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
}
