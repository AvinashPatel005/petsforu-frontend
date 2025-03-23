import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "leaflet/dist/leaflet.css";
import 'react-leaflet-markercluster/styles'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pets from './pages/Pets';
import Product from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
