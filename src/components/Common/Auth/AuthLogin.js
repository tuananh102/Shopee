import { mdiFacebook } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { FacebookLogin } from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import Facebook from "./Facebook";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const AuthLogin = ({ show, setShow, facebook, setLoginData, loginData }) => {
  const [transferLogIn, setTransferLogIn] = useState(true);

  const handleTransfer = (data) => {
    const isLogIn = data === "logIn" ? true : false;

    setTransferLogIn(isLogIn);
  };
  // //MODal

  // LOGIN WITH GOOGLE
  // Success Handler
  const responseGoogleSuccess = (response) => {
    console.log(response);
    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
      imageUrl: response.profileObj.imageUrl,
    };
    setLoginData({
      user: userInfo,
      isLogin: true,
    });
    setShow(false);
  };
  useEffect(() => {
    if (loginData) {
      console.log(loginData);
    }
  }, []);

  // Error Handler
  const responseGoogleError = (response) => {
    console.log(response);
  };
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} scrollable={true} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {transferLogIn === true ? "Đăng nhập" : "Đăng ký"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="sign-in-container">
          {transferLogIn === true ? (
            <div className="sign-in-form-container">
              <form action="/account" className="sign-in-form">
                <label htmlFor="userName">Số điện thoại/Email</label>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại hoặc email.."
                />
                <label htmlFor="password">Mật khẩu</label>
                <input type="password" placeholder="Nhập mật khẩu" />
                <div className="forget-password">
                  <span>Quên mật khẩu?</span>
                </div>
                <div className="submit-btn">
                  <button type="submit">Đăng nhập</button>
                </div>
                <div className="separate d-flex justify-content-center">
                  <div className="separate-left"></div>
                  <span>OR</span>
                  <div className="separate-right"></div>
                </div>
                <div className="social-signup row">
                  <div className="col-6">{facebook}</div>
                  <div className="col-6">
                    <GoogleLogin
                      clientId={CLIENT_ID}
                      buttonText="Google"
                      isSignedIn={true}
                      onSuccess={responseGoogleSuccess}
                      onFailure={responseGoogleError}
                      className="social-btn"
                      cookiePolicy={"single_host_origin"}
                    />
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="sign-up-form-container">
              <form action="/account-signup" className="sign-in-form">
                <label htmlFor="userName">Số điện thoại</label>
                <input type="text" placeholder="Nhập số điện thoại" />
                <label htmlFor="otp">Mã xác nhận OTP</label>
                <input type="text" placeholder="6 ký tự" />
                <label htmlFor="password">Mật khẩu</label>
                <input type="password" placeholder="Nhập mật khẩu" />

                <div className="submit-btn">
                  <button type="submit">Đăng ký</button>
                </div>
              </form>
              <div className="license">
                <p>
                  Bằng việc đăng ký, bạn đã đồng ý với Shopee về{" "}
                  <Link to="/terms-of-use">Điều khoản dịch vụ</Link> &{" "}
                  <Link to="/privacy-policy">Chính sách bảo mật</Link>
                </p>
              </div>
            </div>
          )}
          <div className="transfer--click">
            <span className="transfer--click-noti-text">
              {transferLogIn ? "New to Shopee" : "Have an account"} ?
            </span>
            <a
              href="/#"
              onClick={() =>
                transferLogIn
                  ? handleTransfer("signUp")
                  : handleTransfer("logIn")
              }
              className="text-danger px-2"
            >
              {transferLogIn ? "Sign Up" : "Log In"}
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AuthLogin;
