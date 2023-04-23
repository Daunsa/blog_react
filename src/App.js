import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Index from './components/Index';
import Pagina from './components/Pagina';
import Post from './components/Post';
import Prueba from './components/Prueba';
import Contact from './components/Contact';
import Nosotros from './components/Nosotros';

import 'leaflet/dist/leaflet.css';

import ScrollToTop from './ScrollToTop';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/revista/:id" element={<Pagina />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/prueba" element={<Prueba />} />
          <Route path="/contactanos" element={<Contact />} />
          <Route path="/sobreNosotros" element={<Nosotros />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
