import {
  mdiBellOutline,
  mdiFacebook,
  mdiHelpCircleOutline,
  mdiInstagram,
  mdiWeb,
} from '@mdi/js';
import Icon from "@mdi/react";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthLogin from '../Auth/AuthLogin';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import "../../../scss/components/Navbar.scss";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID + "";
const Navbar = ({ i18n, t: translate }) => {
  const [show, setShow] = useState(false);
  const [loginData, setLoginData] = useState({
    user: {
      name: "",
      emailId: "",
      imageUrl: "",
    },
    isLogin: false,
  });
  const responseFacebook = (response) => {
    console.log(response);
    if (response.status !== 'unknown') {
      let userInfo = {
        name: response.name,
        emailId: response.email,
        imageUrl: response.picture.data.url,
      };
      setLoginData({
        user: userInfo,
        isLogin: true,
      });
      setShow(false);
    }
  }
  const handleFacebookLogin = (data) => {
    console.log(data);
  };
  const facebook = (
    <FacebookLogin
      appId="476839580613064"
      autoLoad={false}
      fields="name,email,picture"
      onClick={handleFacebookLogin}
      callback={responseFacebook}
      cssClass="social-btn"
      textButton="Facebook"
      icon={<Icon path={mdiFacebook} size={1.6} color="#1877F2" />}
    />
  );
  // Logout Session and Update State
  const logout = () => {
    let userInfo = {
      name: "",
      emailId: "",
      imageUrl: "",
    };
    window.sessionStorage.removeItem("access_token");
    // window.sessionStorage.removeItem("nama");
    setLoginData({ user: userInfo, isLogin: false });
    console.log("Log out successfully");

  };

  return (
    <nav className="navbar  sm-0 md-0 lg-12">
      <ul className="navbar__list">
        <li className="navbar__item navbar__item-separate">
          {translate("Seller Centre")}
        </li>
        <li className="navbar__item navbar__item-separate">
          {translate("Join as Seller")}
        </li>
        <li className="navbar__item navbar__item--has-qr navbar__item-separate">
          {translate("Download")}
          {/* Header QR Code */}
          <div className="header__qr">
            <img
              src="./images/qr_code.png"
              alt="Qr Code"
              className="header__qr-img"
            />
            <div className="header__qr-apps">
              <a href="/#" className="header__qr-app-link">
                <img
                  src="./images/ch_play.png"
                  alt="Google Play"
                  className="header__qr-apps-img"
                />
              </a>
              <a href="/#" className="header__qr-app-link">
                <img
                  src="./images/app_store.png"
                  alt="App Store"
                  className="header__qr-apps-img"
                />
              </a>
            </div>
          </div>
        </li>
        <li className="navbar__item">
          <span className="navbar__item-no-pointer">
            {translate("Follow on us")}
          </span>
          <a href="/" className="navbar__item-icon-link">
            <Icon
              path={mdiFacebook}
              title="Facebook"
              size={1.4}
              color="white"
            />
          </a>
          <a href="/" className="navbar__item-icon-link">
            <Icon
              path={mdiInstagram}
              title="InstamdiInstagram"
              size={1.4}
              color="white"
            />
          </a>
        </li>
      </ul>
      <ul className="navbar__list">
        <li className="navbar__item navbar__item--has-notify">
          <a href="/#" className="navbar__item-link">
            <Icon
              path={mdiBellOutline}
              title="Notification"
              size={1.3}
              color="white"
            />
            {translate("Notifications.1")}
          </a>
          <div className="header__notify">
            <header className="header__notify-header">
              <h3>{translate("Notifications.3")}</h3>
            </header>
            <ul className="header__notify-list">
              <li className="header__notify-item header__notify-item--viewed">
                <a href="/#" className="header__notify-link">
                  <img
                    src="./images/notify.png"
                    alt=""
                    className="header__notify-img"
                  />
                  <div className="header__notify-info">
                    <span className="header__notify-name">
                      Xác thực chính hãng nguồn gốc các sản phẩm của Shopee
                    </span>
                    <span className="header__notify-description">
                      Xác thực chính hãng nguồn gốc các sản phẩm của Shopee.
                    </span>
                  </div>
                </a>
              </li>
              <li className="header__notify-item">
                <a href="/#" className="header__notify-link">
                  <img
                    src="./images/notify.png"
                    alt=""
                    className="header__notify-img"
                  />
                  <div className="header__notify-info">
                    <span className="header__notify-name">
                      Xác thực nguồn gốc các sản phẩm
                    </span>
                    <span className="header__notify-description">
                      Xác thực nguồn gốc các sản phẩm
                    </span>
                  </div>
                </a>
              </li>
              <li className="header__notify-item header__notify-item--viewed">
                <a href="/#" className="header__notify-link">
                  <img
                    src="./images/notify.png"
                    alt=""
                    className="header__notify-img"
                  />
                  <div className="header__notify-info">
                    <span className="header__notify-name">
                      Xác thực nguồn gốc các sản phẩm
                    </span>
                    <span className="header__notify-description">
                      Xác thực nguồn gốc các sản phẩm
                    </span>
                  </div>
                </a>
              </li>
              <li className="header__notify-item header__notify-item--viewed">
                <a href="/#" className="header__notify-link">
                  <img
                    src="./images/notify.png"
                    alt=""
                    className="header__notify-img"
                  />
                  <div className="header__notify-info">
                    <span className="header__notify-name">
                      Xác thực nguồn gốc các sản phẩm
                    </span>
                    <span className="header__notify-description">
                      Xác thực nguồn gốc các sản phẩm
                    </span>
                  </div>
                </a>
              </li>
            </ul>
            <footer className="header__notify-footer">
              <a href="/#" className="header__notify-footer-btn">
                Xem tất cả
              </a>
            </footer>
          </div>
        </li>
        <li className="navbar__item">
          <a href="/" className="navbar__item-link">
            <Icon
              path={mdiHelpCircleOutline}
              title="Help"
              size={1.3}
              color="white"
            />
            {translate("Help.1")}
          </a>
        </li>
        <li className="navbar__item">
          <a href="/" className="navbar__item-link navbar__language">
            <Icon path={mdiWeb} title="Language" size={1.3} color="white" />
            {i18n.language === "en" ? "English" : "Tiếng Việt"}
            <ul className="navbar__language-menu">
              <li className="navbar__language-menu-item">
                <span
                  className="navbar__language-menu-item-link"
                  onClick={() => i18n.changeLanguage("en")}
                >
                  English
                </span>
              </li>
              <li className="navbar__language-menu-item">
                <span
                  className="navbar__language-menu-item-link"
                  onClick={() => i18n.changeLanguage("vn")}
                >
                  Tiếng Việt
                </span>
              </li>
            </ul>
          </a>
        </li>

        {/* User  */}
        {loginData.isLogin && <li className="navbar__item navbar__user">
          <img src={loginData.user.imageUrl} alt="" className="navbar__user-avt" />
          <span className="navbar__user-name">{loginData.user.name}</span>
          <ul className="navbar__user-menu">
            <li className="navbar__user-menu-item">
              <a href="/#">{translate("My account")}</a>
            </li>
            <li className="navbar__user-menu-item">
              <a href="/#">{translate("My purchase")}</a>
            </li>
            <li className="navbar__user-menu-item navbar__user-menu-item--separate">
              <GoogleLogout
                clientId={CLIENT_ID}
                onLogoutSuccess={logout}
                icon={false}
                buttonText={translate("Log Out")}
                tag='a'
              />
              {/* <span onClick={logout}>{translate("Log Out")}
              </span> */}
            </li>
          </ul>
        </li>}
        {/* If user logged in, hide this */}
        {!loginData.isLogin &&
          <>
            <li className="navbar__item navbar__item-separate" onClick=
              {() => setShow(true)}>
              {translate('Sign Up')}
            </li>
            <li className="navbar__item" onClick={() => setShow(true)}>
              {translate('Log In')}
            </li></>}
      </ul>
      <AuthLogin show={show} setShow={setShow} facebook={facebook} loginData={loginData} setLoginData={setLoginData} />
    </nav>
  );
};

export default Navbar;
