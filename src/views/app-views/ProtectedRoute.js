import React from "react";
import { Redirect } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  console.log(JSON.parse(localStorage.getItem("user")));
  if (!JSON.parse(localStorage.getItem("user"))) {
    return <Redirect to="/auth" />;
  }

  return children;
};

export default ProtectedRoute;
