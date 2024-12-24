import "@fontsource/phudu";
import "@fontsource/manrope";
import "@fontsource/outfit";

import './App.css';
import Footer from './components/common_components/Footer';
import Header from './components/common_components/Header';
import ProductDrawerHeader from './components/product/product_navigation_component/ProductDrawerHeader';
import Home from "./components/main/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Common Header */}
      <Header />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDrawerHeader />} />
      </Routes>

      {/* Common Footer */}
      <Footer />
    </div>
  );
}

export default App;
