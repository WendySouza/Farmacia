import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ListarCategorias } from "./components/categorias/listarCategorias/ListarCategorias";
import { DeletarCategoria } from "./components/categorias/deletarCategoria/DeletarCategoria";
import { FormCategoria } from "./components/categorias/formCategoria/FormCategoria";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categorias" element={<ListarCategorias />} />
        <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        <Route path="/cadastroCategoria" element={<FormCategoria />} />
        <Route path="/cadastroCategoria/:id" element={<FormCategoria />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
