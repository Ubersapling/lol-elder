import React, { useState } from "react";
import axios from "axios";

import { Link } from 'react-router-dom';
import "../App.css"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/login", { username, password });
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div class="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-dark-purple">
      <div class="40-w p-4 rounded bg-light-purple">
        <form onSubmit={handleSubmit}>
          <img class="img-fluid mb-4" src="/logo.png" />
          <h3 class="mb-4">Sign In</h3>
          <div class="form-group mb-2">
            <label class="mb-1" for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={username} onChange={(e) => setUsername(e.value)} />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group mb-3">
            <label class="mb-1" for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.value)} />
          </div>
          <div class="form-check mb-3">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <div class="d-flex flex-column align-items-center mt-3">
              <Link to="">Can't Sign In?</Link>
              <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;