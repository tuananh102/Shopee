import { mdiFacebook } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { FacebookLogin } from "react-facebook-login";

const Facebook = () => {
  const handleFacebookLogin = (data) => {
    console.log(data);
  };
  const responseFacebook = (response) => {
    console.log(response);
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
  return (
    <div>
      {facebook}
      {/* appId="476839580613064"
          autoLoad={false}
         fields="name,email,picture"
         onClick={handleFacebookLogin}
          callback={responseFacebook}
         cssClass="social-btn"
         textButton="Facebook"
         icon={<Icon path={mdiFacebook} size={1.6} color="#1877F2" */}
    </div>
  );
};

export default Facebook;
