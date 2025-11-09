import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";

import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Cources from "./Pages/Cources";
import CoursesDetail from "./Pages/CoursesDetail";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Cources />} />
        <Route path="/courses/:id" element={<CoursesDetail />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
