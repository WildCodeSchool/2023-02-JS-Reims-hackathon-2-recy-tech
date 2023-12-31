import { Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ListProduct from "./pages/ListProduct";
import AddProducts from "./pages/AddProducts";
import DescPhone from "./pages/DescPhone";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ajouteproduit" element={<AddProducts />} />
        <Route path="/listeproduit" element={<ListProduct />} />
        <Route path="/DescPhone/:id" element={<DescPhone />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
