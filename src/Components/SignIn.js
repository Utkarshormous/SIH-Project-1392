import React from "react";
import space from "../images/Starsf.jpg";

function Signin() {
  return (
    <div>
      <img src={space} className="Imageback" />
      <div className="outer-container">
        <div className="inner-container">
          <div className="signin">CUSTOMER LOGIN</div>
          <div className="input-field">
            <input type="text" required="" spellCheck="false" />
            <label>Enter email</label>
          </div>
          <div className="input-field1">
            <input
              type="password"
              required=""
              spellCheck="false"
              className="input"
            />
            <label className="label">Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            <a href="/">LOGIN </a>
          </button>
          <div className="register-link">
            <p>
              Don't have an account ? <a href="#">Register</a>
            </p>
          </div>
        </div>
          
      </div>
    </div>
  );
}

export default Signin;
