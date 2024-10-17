import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import IndustriesPage from './pages/IndustriesPage';
import ServicesPage from './pages/ServicesPage';
import ServicesAndIndustry from './pages/ServicesAndIndustry';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/services" element={<ServicesPage />} />        
        <Route path="/ServicesAndIndustry" element={<ServicesAndIndustry />} />        
        <Route path="/blog/:slug" element={<BlogPostPage />} /> {/* Dynamic route */}
      </Routes>
    </Router>
  );
}

export default App;
