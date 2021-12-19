import './App.css';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Index';
import Products from './pages/Products';
import Platform from './pages/Platform';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import WhyUs from './pages/Why Us';
import Contact from './pages/Contact';
import NotFound from './pages/404';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/platform' element={<Platform />} />
        <Route path='/why-us' element={<WhyUs />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;