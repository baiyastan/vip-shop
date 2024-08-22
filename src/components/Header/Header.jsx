import React from "react";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="top-header">
        <div className="container flex">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <a>ShopNow</a>
          </p>
          <select name="" id="">
            <option value="kg">КР</option>
            <option value="en">ENG</option>
            <option value="ru">РУС</option>
          </select>
        </div>
      </div>
      <header className="header container">
        <div className="header-left">
          <h1>Exclusive</h1>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign up</li>
          </ul>
        </div>
        <div className="header-right">
          <div className="search">
            <input type="text" />
            <img src="" alt="" />
          </div>
          <div className="right-icon">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
