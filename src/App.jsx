import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieLibrary from './pages/MovieLibrary';
import WatchMovie from './pages/WatchMovie';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieLibrary />} />
        <Route path="/watch/:movieId" element={<WatchMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
