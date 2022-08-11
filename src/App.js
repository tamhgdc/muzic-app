import React, { useEffect } from "react";
import "./index.css";
import "swiper/css";
import "swiper/css/bundle";
import { Routes, Route } from "react-router-dom";
import MainLayout from "layout/MainLayout";
import Home from "pages/Home";
import { getSongs } from "saga/musicSlice";
import { useDispatch } from "react-redux";
import AmSongs from "pages/AmSongs";

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getSongs());
  }, [dispath]);
  return (
    <div className="App bg-[#c2c6d2] w-full h-full min-h-screen p-10 pb-16">
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/am" element={<AmSongs></AmSongs>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
