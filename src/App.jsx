/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./Components/NavBar";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import Drawer from "./Components/Drawer";
import AddPost from "./pages/AddPost";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <NavBar />
        <Drawer />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Addpost" element={<AddPost />} />
          <Route path="*" element={<>error</>} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
