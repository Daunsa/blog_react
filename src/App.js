import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Index from './components/Index';
import Pagina from './components/Pagina';
import Post from './components/Post';
import Prueba from './components/Prueba';

import 'leaflet/dist/leaflet.css';

import ScrollToTop from './ScrollToTop';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pagina" element={<Pagina />} />
          <Route path="/post" element={<Post />} />
          <Route path="/prueba" element={<Prueba />} />

        </Routes>

        <Footer />

        <a href="#"
          className="back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 hidden"
          aria-label="Scroll To Top">
          <svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clipRule="evenodd"></path>
            <path fillRule="evenodd"
              d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z"
              clipRule="evenodd"></path>
          </svg>
        </a>
      </BrowserRouter>
    </>
  );
}

export default App;
