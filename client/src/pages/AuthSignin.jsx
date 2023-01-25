import React, { useEffect } from "react";
import Layout from "../components/Layout";
import SignIn from "../components/SignIn";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
//Check the Auth every time and auth and navigate are updated
  useEffect(() => {
    if (auth) {
      navigate("/");
    }
  }),
    [auth, navigate];

  return (
    <Layout>
      <div className="authcontainer">
        
        <SignIn />
      </div>
    </Layout>
  );
};

export default Auth;
