// npm
import { BrowserRouter, Routes, Route } from "react-router-dom";

// files
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="product" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
