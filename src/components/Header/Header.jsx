import React from "react";
import "./Header.scss";
import heart from "../../assets/svg/heart.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    const lng = event.target.value;
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="top-header">
        <div className="container flex">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <a>ShopNow</a>
          </p>
          <select onChange={handleChange} name="" id="">
            <option value="kg">КР</option>
            <option value="en">ENG</option>
            <option value="ru">РУС</option>
          </select>
        </div>
      </div>
      <header className="header container">
        <div className="header-left">
          <h1>{t("logo")}</h1>
          <ul>
            <li>
              <Link to="/">{t("home")}</Link>
            </li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign up</li>
          </ul>
        </div>
        <div className="header-right">
          <div className="search">
            <input type="text" placeholder={t("home")} />
            <img src="" alt="" />
          </div>
          <div className="right-icon">
            <Link to="/wishlist">
              <img src={heart} alt="" />
            </Link>
            <img src="" alt="" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
