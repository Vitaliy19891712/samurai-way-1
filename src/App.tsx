import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Nav";
import { Profile } from "./Components/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
