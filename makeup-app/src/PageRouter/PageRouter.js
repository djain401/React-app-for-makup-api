import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";

import React from "react";

const PageRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsapi" element={<Product />} />
        {/* <Route path="/productsapi" element={<Product />} /> */}
      </Routes>
    </Router>
  );
};

export default PageRouter;
