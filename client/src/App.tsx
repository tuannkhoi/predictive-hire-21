import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Products from './pages/products';
import Pricing from './pages/pricing';
import Resources from './pages/resources';
import Blog from './pages/blog';
import WhyUs from './pages/why-us';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
		<Route path='/pricing' element={<Pricing />} />
		<Route path='/resources' element={<Resources />} />
		<Route path='/blog' element={<Blog />} />
		<Route path='/why-us' element={<WhyUs />} />
		<Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;