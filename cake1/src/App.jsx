import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./views/Products";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<h1>Bienvenido a Happy Cake</h1>} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/volver" element={<Navigate to="/home"/>}/>
        <Route path="/products" element={<Products />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
