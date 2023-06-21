import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";
import Details from "./pages/details";
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import Main from "./pages/main";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AddSignalement from './pages/AddSignalement';
import TraitementSignalement from "./pages/StatsEnfants";
import StatsEnfants from "./pages/StatsEnfants";

const App = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const showNavbarAndHeader = isLoggedIn || location.pathname !== "/";

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/main" /> : <Login onLogin={handleLogin} />}
        />

        {/* Other routes go here */}
      </Routes>

      {showNavbarAndHeader && (
        
        <div className="flex h-screen flex-row-reverse">
          {/* Side Menu */}
          <div className="w-1/6">
            {isLoggedIn && <Navbar />}
          </div>
          {/* Content */}
          <div className="flex-1 relative overflow-y-auto">
            {/* Header */}
            <div className="bg-white shadow-sm">
              {isLoggedIn && <Header />}
            </div>

            <Routes>
              <Route path="/main" element={<Main />} />
              <Route path="/details" element={<Details />} />
              <Route path="/Signalement" element={<Dashboard />} />
              <Route path="/AddSignalement" element={<AddSignalement />}
               />
              <Route path="/StatistiqueEnfants" element={<StatsEnfants />} />
              {/* Other routes go here */}
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
