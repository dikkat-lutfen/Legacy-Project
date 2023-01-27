import React from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignIn = () => {
  const navigate = useNavigate();
  const signIn = async (e) => {
    e.preventDefault();
    // Get the values from email and password
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Sign in with those values
    try {
      await axios.post('/api/auth/signIn', {
        email,
        password,
      });

      // If the values are correct navigate to the user home page
      navigate('/');
      toast.success('Sign In Successful!');
    } catch (error) {
      console.log(error);
      toast.error('Sign In Failed! ');
    }
  };
  return (
    <div className="signin">
      <h1 className="title">Sign In</h1>
      <form className="form" onSubmit={signIn}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <Link className="singUp-link" to="/auth">
        Click Here To Sign Up
      </Link>
    </div>
  );
};

export default SignIn;
