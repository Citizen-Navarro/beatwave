import LandingPage from "./components/LandingPage";
import TrendingArtists from "./components/TrendingArtists";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="font-sans bg-black min-h-screen text-white">
      {/* Landing Page */}
      <LandingPage />

      {/* Trending Artists */}
      <TrendingArtists />

      {/* Dashboard */}
      <Dashboard />
    </div>
  );
}

export default App;
