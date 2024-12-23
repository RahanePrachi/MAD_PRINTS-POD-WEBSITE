import "@fontsource/phudu";
import "@fontsource/manrope";
import "@fontsource/outfit";

import './App.css';
import PStudio from "./components/personalizationStudio/PStudio";
import Footer from './components/common_components/Footer';
import Header from './components/common_components/Header';
import ProductDrawerHeader from './components/product/product_navigation_component/ProductDrawerHeader';
import Home from "./components/main/Home";
import { Route, Routes } from "react-router-dom";
import MyStores from "./components/mystores/MyStores";
import MyStoreSettings from "./components/mystores/MyStoreSettings";
function App() {
  return (
    <div>
      {/* Common Header */}
      <Header />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductDrawerHeader />} />
        <Route path="/mystores" element={<MyStores/>} />
        <Route path="/storeSetting" element={<MyStoreSettings/>}/>
        <Route path="/PStudio" element={<PStudio/>}/>
      </Routes>

      {/* Common Footer */}
      <Footer />
    </div>
  );
}

export default App;
