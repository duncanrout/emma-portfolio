import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Footer from './components/Footer';
import ImageGrid from './components/ImageGrid';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';


const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/250',
  // Add more image URLs here
];

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
