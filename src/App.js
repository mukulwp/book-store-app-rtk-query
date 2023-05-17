import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:bookId" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
