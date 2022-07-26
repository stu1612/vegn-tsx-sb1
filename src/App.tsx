// npm
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// files
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
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
      </BrowserRouter>
    </div>
  );
}
