import React from "react";
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login"); 
      };
  return (
    <div>
      Signup
      <p>
        <input type="text" placeholder="Enter Name"></input>
      </p>
      <p><input type="text" placeholder="Enter Email"></input></p>
      <p>Date of Birth:<input type="datetime-local"></input></p>
      <p>Location:<input type="radio" name="location"></input>Hyderabad<input type="radio" name="location"></input>Bengaluru</p>
      <button>Signup</button>
      <hr></hr>
      <button onClick={handleLogin}>Already a member? Login Here...</button>
      <hr></hr>
    </div>
  );
}