import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Pages/login";
import Home from "./Pages/home";

type AuthStatus = "loggedOut" | "loggingIn" | "loggedIn" | "loginError";

function App() {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("loggedOut");

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setAuthStatus("loggedIn");
    }
  }, [token]);

  return (
    <Router>
      <div className="App">
        <Routes>
          {authStatus === "loggedIn" ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
