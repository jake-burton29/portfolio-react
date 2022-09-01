import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Projects, ContactMe, Home } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
