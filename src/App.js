import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Login from "../src/Pages/login/Login";
import Register from "../src/Pages/register/Register";
import Home from "../src/Pages/Home/Home";
import React from "react";
import { auth } from "./firebase";
import { useState } from "react";
function App() {
  const [user, setUser] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={user ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
