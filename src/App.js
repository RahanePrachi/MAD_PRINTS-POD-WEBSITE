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
import OrderProducts from "./components/addToOrder/OrderProducts";
import MyStores from "./components/mystores/MyStores";
import MyStoreSettings from "./components/mystores/MyStoreSettings";
import AddProductProcessFlowBar from "./components/product/create_product/AddProductProcessFlowBar";
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
        <Route path="addToOrder" element={<OrderProducts/>}/>
        <Route path="addProductFlow" element={<AddProductProcessFlowBar/>}/>
      </Routes>

   

      {/* Common Footer */}
      <Footer />
    </div>
  );
}

export default App;
