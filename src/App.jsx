import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import TrendingArtists from "./components/TrendingArtists";
import SearchResults from "./components/SearchResults";
import TrackAlbumPlaying from "./components/TrackAlbumPlaying";
import Playlist from "./components/Playlist";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trending-artists" element={<TrendingArtists />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/track-album" element={<TrackAlbumPlaying />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
