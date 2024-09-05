import React, { useState } from "react";
import phone from "../../assets/image/phoneImage.png";
import "./Auth.scss";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegisterCom() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handler(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  async function singUp() {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      setUser({ email: "", password: "" });
      toast.success("email success created");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div className="auth container">
      <img src={phone} alt="" />
      <div className="auth-content">
        <div className="auth-title">
          <h3>Create an account</h3>
          <p>Enter your details below</p>
        </div>
        <div className="auth-form">
          <div className="auth-input">
            <input type="text" placeholder="name" />
            <input
              onChange={handler}
              value={user.email}
              name="email"
              type="email"
              placeholder="Email or Phone Number"
            />
            <input
              onChange={handler}
              value={user.password}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="auth-btns">
            <button onClick={() => singUp()} className="create">
              Create Account
            </button>
            <button className="google">Sign up with Google</button>
            <div className="auth-link">
              <p>Already have account?</p>
              <Link to="/login">Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterCom;
