import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "components/nav/nav";
import Login from "components/login/login";
import Singup from "components/singup/singup";
import Tickets from "components/tickets/tickets";
import Usuarios from "components/usuarios/usuarios";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
	  <Route path="/" element={<Login />} />
	  <Route path="/signup" element={<Singup />} />
	  <Route path="/tickets" element={<Tickets />} />
	  <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
