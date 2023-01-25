import React from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import {Link} from "react-router-dom"
import {useState} from "react"

const SignUp = () => {

    const[password, setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");

    console.log(password)
    console.log(confirmPassword)

    const signUp = async (e) => {
        if(password==confirmPassword){
            e.preventDefault();
        //Getting the values from the input
        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
           
        };
        
        //Creating a new user 
        try {
            await axios.post("http://localhost:8000/api/auth/signUp", user);
            toast.success("Sign up Successful!");
            //Clearing out the inputs
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.password.value = "";
        } catch (error) {
            console.log(error);
            toast.error("Sign up Failed!");
        }
        }else{
            toast.error("Confirm your password");
        }
    };

    return (
        <div className="signup">
            <h1 className="title">Sign Up</h1>
            <form className="form" onSubmit={signUp}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" required />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Email" required />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    required
                    onChange={(e)=>{setConfirmPassword(e.target.value)}}
                />
                <button type="submit">Sign Up</button>
                <br />
            <Link style={{ color: 'black' }} to="/authSignin">
              Click Here To Login
            </Link>
            </form>
        </div>
    );
};

export default SignUp;
