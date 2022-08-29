import React from "react";
import { Route, Routes } from "react-router-dom";
import TopBar from "../components/TopBar/TopBar";
import CategoryMain from "../pages/CategoryMain/CategoryMain";

const AppLayout = () => {
  return (
    <div className="mainContainer">
      <TopBar />
      <br />
      <Routes>
        <Route path="/" element={<CategoryMain />} />
      </Routes>
    </div>
  );
};

export default AppLayout;
