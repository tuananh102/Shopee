import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
const BannerSlider = () => {
  const settings = {
    autoplay: true,
    dots: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="./images/home/banner/slider/macbook_air_m1.webp" alt="" />
      </div>
      <div>
        <img src="./images/home/banner/slider/msi_modern.webp" alt="" />
      </div>
      <div>
        <img src="./images/home/banner/slider/galaxy_s22.webp" alt="" />
      </div>
      <div>
        <img src="./images/home/banner/slider/jbl_charge_4.webp" alt="" />
      </div>
      <div>
        <img src="./images/home/banner/slider/samsung.webp" alt="" />
      </div>
      <div>
        <img src="./images/home/banner/slider/note_11_hotsale.webp" alt="" />
      </div>
      <div>
        <img src="./images/home/banner/slider/realme_9_pro.webp" alt="" />
      </div>
    </Slider>
  );
};

export default BannerSlider;
