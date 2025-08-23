import React, { useState } from "react";
import Navbar from "./Navbar";

const userData = {
  name: "Citizen Navarro",
  username: "@Citizen_Navarro",
  bio: "Passionate music lover. Sharing my favorite tracks and playlists with the world.",
  profileImage: "/citizen.jpg", // make sure this exists in /public
  playlists: [
    { id: 1, name: "Lo-Fi Vibes", image: "/images/lofi.jpg" },
    { id: 2, name: "Workout Pump", image: "/images/workout.jpg" },
    { id: 3, name: "Hip-Hop Classics", image: "/images/hiphop.jpg" },
  ],
};

export default function Profile() {
  const [user, setUser] = useState(userData);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    bio: user.bio,
    profileImage: user.profileImage,
  });

  const handleEditClick = () => setIsEditing(true);
  const handleCloseModal = () => setIsEditing(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profileImage: imageUrl });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser({ ...user, ...formData });
    setIsEditing(false);
  };

  return (
    <div
      className="relative min-h-screen w-full bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/black-headphones.jpg')" }}
    >
      {/* Dark overlay for consistency */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Navbar (fixed at top) */}
      <div className="fixed top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-16 w-full max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-jomolhari text-white text-center mb-4 sm:mb-6 md:mb-8">
          Profile
        </h1>

        {/* Sub-title / Username */}
        <p className="text-[#4B4A4A] text-base sm:text-lg md:text-xl text-center mb-8">
          {user.username}
        </p>

        {/* User info card with edit button */}
        <div className="bg-[#0B0B0B] rounded-2xl shadow-lg p-6 sm:p-8 relative flex flex-col items-center text-center mb-12 transform transition-transform duration-300 hover:scale-105 w-full sm:max-w-xl">
          <button
            onClick={handleEditClick}
            className="absolute top-4 right-4 text-white bg-[#3C0A4C] px-3 py-1 rounded-lg font-inder text-sm hover:bg-purple-800 transition cursor-pointer"
          >
            Edit
          </button>

          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-4">
            <img
              src={user.profileImage}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-inder text-white mb-2">
            {user.name}
          </h2>
          <p className="text-[#4B4A4A] text-sm sm:text-base">{user.bio}</p>
        </div>

        {/* User's playlists */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-jomolhari text-white text-left w-full mb-6">
          Playlists
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {user.playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-[#0B0B0B] rounded-2xl shadow-lg p-4 flex flex-col items-center text-center cursor-pointer hover:bg-[#0B0B0B]/90 transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={playlist.image}
                alt={playlist.name}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover rounded-xl mb-4 shadow-md"
              />
              <h3 className="text-lg sm:text-xl font-inder text-white">
                {playlist.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0B0B0B] rounded-2xl p-6 sm:p-8 w-full max-w-md relative">
            <h2 className="text-2xl font-jomolhari text-white mb-4 text-center">
              Edit Profile
            </h2>
            <form className="flex flex-col gap-4" onSubmit={handleSave}>
              <div className="flex flex-col items-center gap-3">
                <div className="w-28 h-28 rounded-full overflow-hidden">
                  <img
                    src={formData.profileImage}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <label className="cursor-pointer text-sm text-purple-400 hover:underline">
                  Change Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>

              <label className="text-white font-inder">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 rounded-lg bg-[#1A1A1A] text-white outline-none"
                  required
                />
              </label>

              <label className="text-white font-inder">
                Bio:
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 rounded-lg bg-[#1A1A1A] text-white outline-none"
                  rows={4}
                  required
                />
              </label>

              <div className="flex justify-end gap-4 mt-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 rounded-lg font-inder bg-gray-700 text-white hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg font-inder bg-brand text-white hover:bg-purple-800 transition"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
