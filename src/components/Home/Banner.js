import React from "react";
import useQuery from "../../hooks/useQuery";
import "../../scss/components/Home/Banner.scss";
import Menu from "./BannerListMenu";
import Slider from "./BannerSlider";
const Banner = () => {
  const { data, loading, error } = useQuery(`/category`);
  console.log("Category home: ", data);
  return (
    <div className="home-banner-container">
      <div className="grid wide home-banner">
        <div className="row">
          <div className="col-lg-2 d-none d-lg-block">
            <Menu data={data} />
          </div>
          <div className="col-lg-10 col-12">
            <div className="row pe-lg-0">
              <div className="col-lg-9 col-12">
                <Slider />
              </div>
              <div className="col-lg-3  d-none d-lg-block">
                <div className="banner-right">
                  <a href="/" className="banner-right-link">
                    <img
                      src="./images/home/banner/right1.webp"
                      alt=""
                      className="banner-right-link__img"
                    />
                  </a>
                  <a href="/" className="banner-right-link">
                    <img
                      src="./images/home/banner/right2.webp"
                      alt=""
                      className="banner-right-link__img"
                    />
                  </a>
                  <a href="/" className="banner-right-link">
                    <img
                      src="./images/home/banner/right3.webp"
                      alt=""
                      className="banner-right-link__img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid wide home-banner-special">
        <div className="row">
          <a href="/" className="home-banner-special-link">
            <img src="./images/home/banner/8.webp" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
