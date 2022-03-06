import React from "react";
import Icon from "@mdi/react";
import '../../scss/components/Home/Banner.scss';
import Menu from './BannerListMenu';
import Slider from './BannerSlider';
const Banner = () => {
  return (
    <div className="home-banner">
      <div className="grid wide">
        <div className="row">
          <div className="col-2">
            <Menu />
          </div>
          <div className="col-10 row">
            <div className="col-9"><Slider /></div>
            <div className="col-3">
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
  );
};

export default Banner;
