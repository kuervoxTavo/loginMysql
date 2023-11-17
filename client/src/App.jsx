import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" element={<h1>Tareas del usuario</h1>} />
        <Route path="/add-tasks" element={<h1>Nueva tarea</h1>} />
        <Route path="/tasks/:id" element={<h1>Update tarea</h1>} />
        <Route path="/profile" element={<h1>Portafolio</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
