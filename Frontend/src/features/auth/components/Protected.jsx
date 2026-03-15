import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, useNavigate } from "react-router";
import Loader from "../../shared/components/Loader";

import Navbar from "../../shared/components/Navbar";

const Protected = ({ children }) => {
  const { loading, user } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Protected;
