import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthSignup from "./pages/AuthSignup";
import AuthSignin from"./pages/authSignin";
import PrivateRoutes from "./components/PrivateRoutes";

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
         toastOptions={{
          style: { fontSize: "1.8rem", marginTop:"40px" },
        }}
      ></Toaster>

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
       {/*  <Route path="/auth" element={<Auth />}></Route> */}
        <Route path="/auth" element={<AuthSignup />}></Route>
        <Route path="/authSignin" element={<AuthSignin />}></Route>
      </Routes>
    </>
  );
};

export default App;
