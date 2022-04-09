/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Modal } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const AuthLogin = ({
  translate,
  setTransferLogIn,
  transferLogIn,
  show,
  setShow,
  facebook,
  setLoginData,
  loginData,
}) => {
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
    setLoginData(userInfo);
    setShow(false);
    localStorage.setItem("loginData", JSON.stringify(response.profileObj));
  };

  // Error Handler
  const responseGoogleError = (response) => {
    console.log(response);
  };
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} scrollable={true} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {transferLogIn === true ? translate("Log In") : translate("Sign Up")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="sign-in-container">
          {transferLogIn === true ? (
            <div className="sign-in-form-container">
              <form action="/account" className="sign-in-form">
                <label htmlFor="userName">Email</label>
                <input
                  type="email"
                  placeholder={translate("Enter your email")}
                />
                <label htmlFor="password">{translate("Password.1")}</label>
                <input type="password" placeholder={translate("Password.2")} />
                <div className="forget-password">
                  <span>{translate("Password.3")}?</span>
                </div>
                <div className="submit-btn">
                  <button type="submit">{translate("Log In")}</button>
                </div>
                <div className="separate d-flex justify-content-center">
                  <div className="separate-left"></div>
                  <span style={{ textTransform: "uppercase" }}>
                    {translate("Or")}
                  </span>
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
                <label htmlFor="userName">Email</label>
                <input
                  type="email"
                  placeholder={translate("Enter your email")}
                />
                <label htmlFor="password">{translate("Password.1")}</label>
                <input
                  type="password"
                  name="password"
                  placeholder={translate("Password.2")}
                />
                <label htmlFor="reEnterPassword">
                  {translate("Password.4")}
                </label>
                <input type="password" name="reEnterPassword" />

                <div className="submit-btn">
                  <button type="submit">{translate("Sign Up")}</button>
                </div>
              </form>
              <div className="license">
                <p>
                  {translate("By signing up, you agree to Shopee's")}
                  <Link to="/terms-of-use">
                    &nbsp;{translate("Terms of Service")}
                  </Link>{" "}
                  &
                  <Link to="/privacy-policy">
                    &nbsp;{translate("Privacy Policy")}
                  </Link>
                </p>
              </div>
            </div>
          )}
          <div className="transfer--click">
            <span className="transfer--click-noti-text">
              {transferLogIn
                ? translate("New to Shopee")
                : translate("Have an account")}{" "}
              ?
            </span>
            <span
              onClick={() =>
                transferLogIn
                  ? handleTransfer("signUp")
                  : handleTransfer("logIn")
              }
              className="text-danger px-2 transfer-btn"
            >
              {transferLogIn ? translate("Sign Up") : translate("Log In")}
            </span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AuthLogin;
