import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import SignUp from '../components/SignUp';
import SignIn from '../components/SignIn';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Auth = () => {
  // const { auth } = useAuth();
  // const navigate = useNavigate();
  //Check the Auth every time and auth and navigate are updated
  // useEffect(() => {
  //   if (auth) {
  //     navigate('/');
  //   }
  // }),
  //   [auth, navigate];

  return (
    <Layout>
      <div className="authcontainer">
        <SignUp />
      </div>
    </Layout>
  );
};

export default Auth;
