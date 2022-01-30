import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importing connection to main sass which has all the design imports
import './sass/main.scss';

//Importing all the pages connecting to the website
import Header from "./singlePages/Header";
import HomePage from "./pages/HomePage";
import Cities from "./pages/Cities";
import MyTime from "./pages/MyTime";
import MissingPage from "./singlePages/MissingPage";
import Footer from "./singlePages/Footer";

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
        <Footer />
      </BrowserRouter>
    </main>
  );
}
