// npm
import { BrowserRouter, Routes, Route } from "react-router-dom";

// files
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:title" element={<Category />} />
          <Route path="category/:title/:slug" element={<Product />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
