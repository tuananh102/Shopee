import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer";
import { useTranslation } from "react-i18next";
function Main() {
  const { t, i18n } = useTranslation();

  console.log();
  return (
    <div>
      <Header i18n={i18n} t={t} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;
