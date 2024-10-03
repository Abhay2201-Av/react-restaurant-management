import React from "react";
import "./assets/css/style.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { AuthProvider } from "./components/context/Authcontext";

const App = () => {
  return (
    <>
    <AuthProvider>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
      <Footer />
      </AuthProvider>
    </>
  );
};

export default App;
