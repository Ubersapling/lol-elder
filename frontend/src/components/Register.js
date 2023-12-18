import React from "react";

function Register() {
  return (
    <div class="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-dark-purple">
      <div class="40-w p-4 rounded bg-light-purple">
        <form>
          <img class="img-fluid mb-4" src="/logo.png" />
          <h3 class="mb-4">Register</h3>
          <div class="form-group">
            <label class="mb-1" for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group mb-4">
            <label class="mb-1" for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;