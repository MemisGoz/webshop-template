import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Nav from "./components/Header/Nav";
import Banner from "./components/Header/Banner";
import Footer2 from "./components/footer/Footer2";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Banner />
        <Nav />
        <Routes>
          {/* Define routes with Route */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer2 />
      </Router>
    </>
  );
}

export default App;
