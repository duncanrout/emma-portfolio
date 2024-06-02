import './App.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageGrid from './components/ImageGrid';

const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/250',
  // Add more image URLs here
];

function App() {

  return (
    <div className="App">
      <Navbar />
      <Landing />
      <ImageGrid images={images} />
      <Footer />
    </div>
  );
}

export default App;
