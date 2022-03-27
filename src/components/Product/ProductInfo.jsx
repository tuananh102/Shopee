// import Slider from "react-slick";
import {
  mdiCellphone,
  mdiHome,
  mdiMinus,
  mdiPackageVariant,
  mdiPhone,
  mdiPlus,
  mdiShieldCheckOutline,
  mdiStar,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import NumberFormat from "react-number-format";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../scss/components/Product/Product.scss";
import { Link } from "react-router-dom";
import SimilarProducts from "../Common/SimilarProducts";

const ProductInfo = ({ product }) => {
  const [imgActive, setImageActive] = useState(product.image);
  const [quantity, setQuantity] = useState(product.count || 1);
  console.log("Image active: ", imgActive);
  const handleDecreaseQuantity = () => {
    if (quantity === 1) return;
    else {
      setQuantity(quantity - 1);
    }
  };
  function handleOnChangeQuantity(e) {
    console.log(e.target.value);
    if (e.target.value !== "") {
      parseInt(e.target.value);
    }
  }
  function handleOnMouseLeaveQuantity(e) {
    if (e.target.value === "") {
      // setQuantity(1);
    }
  }
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="product-details-container">
      <div className="breadcrumbs">
        <Breadcrumb className="grid wide">
          <Breadcrumb.Item href="/" title="Go back to Hompage">
            <Icon path={mdiHome} size={1.2} color="#d0011b" /> Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href=".">{product.category}</Breadcrumb.Item>
          <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="product-details">
        <div className="general-information">
          <div className="grid wide">
            <div className="row">
              <div className="col-5 product-gallery">
                <div className="img-active-container">
                  <div className="img-active-img">
                    <img src={imgActive} alt="" />
                  </div>
                </div>
                <ul className="list-img">
                  <li
                    className={
                      imgActive === product.image
                        ? "list-img-item active"
                        : "list-img-item"
                    }
                    onMouseEnter={() => setImageActive(product.image)}
                  >
                    <img src={product.image} alt="" />
                  </li>
                  <li
                    className="list-img-item"
                    onMouseEnter={() => setImageActive(product.image)}
                  >
                    <img src={product.image} alt="" />
                  </li>
                  <li
                    className="list-img-item"
                    onMouseEnter={() => setImageActive(product.image)}
                  >
                    <img src={product.image} alt="" />
                  </li>
                  <li
                    className="list-img-item"
                    onMouseEnter={() => setImageActive(product.image)}
                  >
                    <img src={product.image} alt="" />
                  </li>
                  <li
                    className="list-img-item"
                    onMouseEnter={() => setImageActive(product.image)}
                  >
                    <img src={product.image} alt="" />
                  </li>
                </ul>
              </div>
              <div className="col-7 product-info">
                <h3 className="product-details-name">{product.title}</h3>
                <a className="product-details-rating" href="/#">
                  <div className="product-details-rating-star">
                    <Icon path={mdiStar} size={1.2} />
                    <Icon path={mdiStar} size={1.2} />
                    <Icon path={mdiStar} size={1.2} />
                    <Icon path={mdiStar} size={1.2} />
                    <Icon path={mdiStar} size={1.2} />
                    <div
                      className="rating-children"
                      style={{ width: `${product.rating.rate * 20}%` }}
                    >
                      <Icon
                        path={mdiStar}
                        size={1.2}
                        className="rating-star--gold"
                      />
                      <Icon
                        path={mdiStar}
                        size={1.2}
                        className="rating-star--gold"
                      />
                      <Icon
                        path={mdiStar}
                        size={1.2}
                        className="rating-star--gold"
                      />
                      <Icon
                        path={mdiStar}
                        size={1.2}
                        className="rating-star--gold"
                      />
                      <Icon
                        path={mdiStar}
                        size={1.2}
                        className="rating-star--gold"
                      />
                    </div>
                  </div>
                  <span className="product-details-rating-count">
                    {product.rating.count} Đánh giá
                  </span>
                </a>
                <div className="product-details-price">
                  <span className="product-details-price-new">
                    <NumberFormat
                      value={product.price}
                      displayType="text"
                      thousandSeparator="."
                      decimalSeparator=","
                      decimalScale={0}
                      suffix=" ₫"
                    />
                  </span>
                  {product.salePrice && (
                    <span className="product-details-price-old">
                      <NumberFormat
                        value={product.salePrice}
                        suffix=" ₫"
                        displayType="text"
                        thousandSeparator="."
                        decimalSeparator=","
                        decimalScale={0}
                      />
                    </span>
                  )}
                </div>

                <div className="row">
                  <div className="col-2 select-options-heading">
                    About product
                  </div>
                  <div className="col-10 general-product-info">
                    <ul className="general-product-info-list">
                      <li className="general-product-info-list-item">
                        <Icon path={mdiCellphone} size={1.2} />
                        Mới, đầy đủ phụ kiện từ nhà sản xuất
                      </li>
                      <li className="general-product-info-list-item">
                        <Icon path={mdiPackageVariant} size={1.2} />
                        Hộp, Sách hướng dẫn, adapter,...
                      </li>
                      <li className="general-product-info-list-item">
                        <Icon path={mdiShieldCheckOutline} size={1.2} />
                        Bảo hành chính hãng 12 tháng tại trung tâm bảo hành
                        chính hãng, 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng
                        từ NSX.
                        <Link
                          to="/warranty-policy"
                          className="general-product-info-list-item-link"
                        >
                          (Xem chi tiết)
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="select-options-heading col-2">
                    <span>Color</span>
                  </div>
                  <div className="list-colors col-10">
                    <a href="/#" className="list-colors-item active">
                      <div className="list-colors-item-img">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="list-colors-item-info">
                        <strong>Xanh</strong>
                        <span>
                          <NumberFormat
                            value={product.price}
                            displayType="text"
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={0}
                            suffix=" ₫"
                          />
                        </span>
                      </div>
                    </a>
                    <a href="/#" className="list-colors-item ">
                      <div className="list-colors-item-img">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="list-colors-item-info">
                        <strong>Đỏ</strong>
                        <span>
                          <NumberFormat
                            value={product.price}
                            displayType="text"
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={0}
                            suffix=" ₫"
                          />
                        </span>
                      </div>
                    </a>
                    <a href="/#" className="list-colors-item ">
                      <div className="list-colors-item-img">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="list-colors-item-info">
                        <strong>Tím</strong>
                        <span>
                          <NumberFormat
                            value={product.price}
                            displayType="text"
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={0}
                            suffix=" ₫"
                          />
                        </span>
                      </div>
                    </a>
                    <a href="/#" className="list-colors-item disable">
                      <div className="list-colors-item-img">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="list-colors-item-info">
                        <strong>Vàng</strong>
                        <span>
                          <NumberFormat
                            value={product.price}
                            displayType="text"
                            thousandSeparator="."
                            decimalSeparator=","
                            decimalScale={0}
                            suffix=" ₫"
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <div className="product-promotions">
                  <h3 className="product-promotions-heading">Khuyến mãi</h3>
                </div> */}
                <div className="row">
                  <div className="select-options-heading col-2">
                    <span>Quantity</span>
                  </div>
                  <div className="d-flex align-items-center col-10 quantity">
                    <div className="input-quantity d-flex justify-content-center">
                      <button
                        className="btn quantity-btn"
                        onClick={handleDecreaseQuantity}
                      >
                        <Icon path={mdiMinus} size={1.2} />
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={product.count || undefined}
                        name="quantity"
                        id="productQuantity"
                        onChange={handleOnChangeQuantity}
                        value={quantity}
                        // onMouseLeave={(e) => handleOnMouseLeaveQuantity(e)}
                      />
                      <button
                        className="btn quantity-btn"
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                      >
                        <Icon path={mdiPlus} size={1.2} />
                      </button>
                    </div>
                    <span>1976 piece of avaiable</span>
                  </div>
                </div>

                <div className="controls-btn">
                  <a href="/#" className="btn add-cart-btn">
                    Add to Cart
                  </a>
                  <a href="/#" className="btn btn--primary buy-btn">
                    Buy now
                  </a>
                </div>
                <div className="shopee-guarantee">
                  <Link
                    to="/shopee-guarantee"
                    className="shopee-guarantee-link"
                  >
                    <div className="shopee-guarantee-wrap">
                      <img src="/images/shopee-warrantee.png" alt="" />
                      Shopee Guarantee
                    </div>
                    <span>
                      Get the items you ordered or get your money back.
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SimilarProducts catId={product.category} />

        <div className="product-details-information grid wide">
          <div className="row">
            <div className="col-8 product-descriptions">
              <h3 className="product-descriptions-heading">Mô tả sản phẩm</h3>
              {/* Render Product details here */}
            </div>
            <div className="col-4 product-specifications">
              <h3 className="product-specifications-heading">
                Thông số kỹ thuật
              </h3>
              {/* Render product specifications here */}
            </div>
          </div>
        </div>
      </div>
      <div className="separate d-block p-3"></div>
    </div>
  );
};

export default ProductInfo;
