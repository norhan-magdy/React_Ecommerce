import { Route, Routes } from "react-router-dom";
// import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import Features from "./components/Features";

function App() {
  return (
    <>
      <div className="App" style={{ minHeight: "calc(100vh - 72px)" }}>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
