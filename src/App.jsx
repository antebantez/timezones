import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import HomePage from "./pages/HomePage";
import Cities from "./pages/Cities";
import MyTime from "./pages/MyTime";
import MissingPage from "./pages/MissingPage";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/my-time" element={<MyTime />} />
          <Route path="/*" element={<MissingPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}