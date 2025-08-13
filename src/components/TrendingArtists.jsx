export default function TrendingArtists() {
  return (
    <section className="p-6 bg-gray-900 text-white">
      <h2 className="text-3xl font-semibold mb-4">Trending Artists</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Placeholder artist cards */}
        {["Artist 1", "Artist 2", "Artist 3", "Artist 4"].map((artist, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg p-4">
            <div className="h-32 bg-gray-700 rounded-lg mb-2"></div>
            <p className="text-lg">{artist}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
