import React from "react";
import "./App.css";
import Navigation from "./features/layout/Navigation";
import User from "./features/user/User";
import { Route, Routes } from "react-router-dom";
import UserForm from "./features/user/UserForm";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/users" element={<User />} />
        <Route path="/users/:id" element={<UserForm />} />
      </Routes>
    </div>
  );
}

export default App;
