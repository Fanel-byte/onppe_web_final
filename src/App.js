import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./pages/details";
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import Main from "./pages/main";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AddSignalement from "./pages/AddSignalement";
import StatsEnfants from "./pages/StatsEnfants";
import StatsSignalement from "./pages/StatsSignalement";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/*"
          element={
            <div className="flex h-screen flex-row-reverse">
              <div className="w-1/6">
                <Navbar />
              </div>
              <div className="flex-1 relative overflow-y-auto">
                <div className="bg-white shadow-sm">
                  <Header />
                </div>
                <Routes>
                  <Route path="main" element={<Main />} />
                  <Route path="details/:id" element={<Details />} />
                  <Route path="Signalement" element={<Dashboard />} />
                  <Route path="AddSignalement" element={<AddSignalement />} />

                  <Route
                    path="StatistiqueEnfants"
                    element={<StatsEnfants />}
                  />
                  <Route
                    path="StatsSignalement"
                    element={<StatsSignalement />}
                  />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
