import React from "react";
import { MutatingDots, Rings, TailSpin, ThreeDots } from "react-loader-spinner";
import "../scss/common/_preloader.scss";

const PreLoader = () => {
  return (
    <ThreeDots
      color="#D0011B"
      wrapperClass="preloader"
      ariaLabel="loading-indicator"
    />
  );
};

export default PreLoader;
