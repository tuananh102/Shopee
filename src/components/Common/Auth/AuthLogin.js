import React from "react";
import { Modal } from "react-bootstrap";
import GoogleLogin from "react-google-login";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import accountApi from "../../../api/accountApi";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../services/actions/user";
import axios from "axios";
//Schema validation
const schema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  password: yup.string().required("This field is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

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

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //REDUX
  const dispatch = useDispatch();

  //Onsubmit SignUp
  const onSubmit = (data) => {
    console.log("Register: ", data);
    accountApi
      .post(data, "register")
      .then(() => {
        toast.success("Success! Please verify email before start.", {
          position: "bottom-left",
        });
        setTransferLogIn(true);
      })
      .catch((err) =>
        toast.error("Oops, Some thing went wrong! " + err, {
          position: "bottom-left",
        })
      );
  };
  const onSubmitLogin = (data) => {
    console.log("Login data :", data);
    accountApi
      .post(data, "login")
      .then((res) => {
        console.log("Login successfully!", res);
        const action = logIn(res);
        dispatch(action);
      })
      .catch((err) =>
        toast.error("Oops, Some thing went wrong! " + err, {
          position: "bottom-left",
        })
      )
      .finally(() => {
        setShow(false);
      });
  };

  // LOGIN WITH GOOGLE
  // Success Handler
  const responseGoogleSuccess = (response) => {
    console.log(response);
    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
      imageUrl: response.profileObj.imageUrl,
    };

    const dataSubmit = {
      provider: "Google",
      Token: response.tokenId,
    };
    axios
      .post(`account/google-login`, dataSubmit)
      .then((res) => {
        const action = logIn(res.data);
        dispatch(action);
      })
      .catch((err) => console.log(err));
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
      <ToastContainer />
      <Modal.Header closeButton>
        <Modal.Title>
          {transferLogIn === true ? translate("Log In") : translate("Sign Up")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="sign-in-container">
          {transferLogIn === true ? (
            <div className="sign-in-form-container">
              <form
                onSubmit={handleSubmit(onSubmitLogin)}
                className="sign-in-form"
              >
                <label htmlFor="userName">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder={translate("Enter your email")}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
                <label htmlFor="password">{translate("Password.1")}</label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder={translate("Password.2")}
                />
                {errors.password && (
                  <p className="error">{errors.password.message}</p>
                )}

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
              <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
                <label htmlFor="userName">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder={translate("Enter your email")}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}

                <label htmlFor="password">{translate("Password.1")}</label>
                <input
                  type="password"
                  {...register("password")}
                  name="password"
                  placeholder={translate("Password.2")}
                />
                {errors.password && (
                  <p className="error">{errors.password.message}</p>
                )}

                <label htmlFor="passwordConfirmation">
                  {translate("Password.4")}
                </label>
                <input
                  type="password"
                  {...register("passwordConfirmation")}
                  name="passwordConfirmation"
                />
                {errors.passwordConfirmation && (
                  <p className="error">{errors.passwordConfirmation.message}</p>
                )}

                <div className="submit-btn">
                  <button type="submit">{translate("Sign Up")}</button>
                </div>
              </form>
              <div className="license">
                <p>
                  {translate("By signing up, you agree to Shopee's")}
                  <Link to="/terms-of-use">
                    &nbsp;{translate("Terms of Service")}
                  </Link>
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
