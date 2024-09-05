import React, { useState } from "react";
import phone from "../../assets/image/phoneImage.png";
import "./Auth.scss";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getIdToken } from "firebase/auth";

function LoginCom() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handler(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  async function signIn() {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      const token = await getIdToken(res.user, true);

      localStorage.setItem("accessToken", token);

      console.log(token);
      toast.success("Successfully signed in!");
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
          <h3>Login to Exclusive</h3>
          <p>Enter your details below</p>
        </div>
        <div className="auth-form">
          <div className="auth-input">
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
            <button onClick={() => signIn()} className="create">
              Login
            </button>
            <div className="auth-link">
              <p>Forget Password</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCom;
