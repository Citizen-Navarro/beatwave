import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/dashboard" },
    { name: "Trending", path: "/trending-artists" },
    { name: "Playlists", path: "/playlist" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="sticky top-0 flex items-center justify-between w-[90%] mx-auto mt-4 px-6 py-4 border border-brand rounded-lg bg-black z-50">
      {/* Logo */}
      <Link to="/">
        <img
          src="/BeatWave.png"
          alt="BeatWave Logo"
          className="h-10 w-auto cursor-pointer hover:opacity-80 transition"
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-white font-inder text-[20px]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`cursor-pointer hover:text-brand transition ${
              location.pathname === link.path ? "text-brand underline" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Desktop Auth Buttons */}
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 w-full bg-black border-t border-brand flex flex-col items-center py-6 gap-6 md:hidden z-50 animate-slideDown">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-white font-inder text-lg hover:text-brand transition ${
                  location.pathname === link.path ? "text-brand underline" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="text-white font-inder cursor-pointer hover:text-brand transition">
              Log in
            </button>
            <button className="bg-brand text-white px-6 py-2 rounded-lg shadow-md font-inder cursor-pointer hover:bg-purple-800 transition">
              Sign up
            </button>
          </div>
        </>
      )}
    </nav>
  );
}
