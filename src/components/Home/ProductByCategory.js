import { mdiChevronRight, mdiHeart, mdiHeartOutline, mdiStar } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import "../../scss/components/Home/ProductByCategory.scss";

const ProductByCategory = () => {
  return (
    <div className="grid wide">
      <div className="home-product row">
        <div className="home-product-heading">
          <a href="/" className="home-product-title">Điện thoại nổi bật</a>
          <a href="/" className="home-product__see-all">See All
            <Icon path={mdiChevronRight} size={1.4} />
          </a>
        </div>
        <div className="grid wide home-product-container">
          <div className="row">
            <div className="col-2-4 home-product__item-wrap" >
              <a className="home-product__item p-3" href="#">
                <div className="home-product__box-img">
                  <img
                    className="home-product__item-img"
                    src="./images/products/product1.jpg" alt="Samsung Galaxy S22 Ultra (8GB - 128GB)"
                  /></div>
                <h3 className="home-product__item-name">
                  Samsung Galaxy S22 Ultra (8GB - 128GB)
                </h3>
                <div className="home-product__item-price">
                  <span className="home-product__item-price-new"
                  >₫6.350.000</span
                  >
                  <span className="home-product__item-price-old"
                  >₫7.990.000</span
                  >
                </div>
                <div className="home-product__item-rating">
                  <div className="home-product__item-rating-star">
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="" />
                  </div>
                  <span className="home-product__item-rating-number">
                    2 Đánh giá
                  </span>
                </div>
                <div className="home-product__item-sale">
                  <span>Giảm 13%</span>
                </div>
              </a>
            </div>

            <div className="col-2-4 home-product__item-wrap" >
              <a className="home-product__item p-3" href="#">
                <div className="home-product__box-img">
                  <img
                    className="home-product__item-img"
                    src="./images/products/product1.jpg" alt="Samsung Galaxy S22 Ultra (8GB - 128GB)"
                  /></div>
                <h3 className="home-product__item-name">
                  Samsung Galaxy S22 Ultra (8GB - 128GB)
                </h3>
                <div className="home-product__item-price">
                  <span className="home-product__item-price-new"
                  >₫6.350.000</span
                  >
                  <span className="home-product__item-price-old"
                  >₫7.990.000</span
                  >
                </div>
                <div className="home-product__item-rating">
                  <div className="home-product__item-rating-star">
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="" />
                  </div>
                  <span className="home-product__item-rating-number">
                    2 Đánh giá
                  </span>
                </div>
                <div className="home-product__item-sale">
                  <span>Giảm 13%</span>
                </div>
              </a>
            </div>

            <div className="col-2-4 home-product__item-wrap" >
              <a className="home-product__item p-3" href="#">
                <div className="home-product__box-img">
                  <img
                    className="home-product__item-img"
                    src="./images/products/product1.jpg" alt="Samsung Galaxy S22 Ultra (8GB - 128GB)"
                  /></div>
                <h3 className="home-product__item-name">
                  Samsung Galaxy S22 Ultra (8GB - 128GB)
                </h3>
                <div className="home-product__item-price">
                  <span className="home-product__item-price-new"
                  >₫6.350.000</span
                  >
                  <span className="home-product__item-price-old"
                  >₫7.990.000</span
                  >
                </div>
                <div className="home-product__item-rating">
                  <div className="home-product__item-rating-star">
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="" />
                  </div>
                  <span className="home-product__item-rating-number">
                    2 Đánh giá
                  </span>
                </div>
                <div className="home-product__item-sale">
                  <span>Giảm 13%</span>
                </div>
              </a>
            </div>

            <div className="col-2-4 home-product__item-wrap" >
              <a className="home-product__item p-3" href="#">
                <div className="home-product__box-img">
                  <img
                    className="home-product__item-img"
                    src="./images/products/product1.jpg" alt="Samsung Galaxy S22 Ultra (8GB - 128GB)"
                  /></div>
                <h3 className="home-product__item-name">
                  Samsung Galaxy S22 Ultra (8GB - 128GB)
                </h3>
                <div className="home-product__item-price">
                  <span className="home-product__item-price-new"
                  >₫6.350.000</span
                  >
                  <span className="home-product__item-price-old"
                  >₫7.990.000</span
                  >
                </div>
                <div className="home-product__item-rating">
                  <div className="home-product__item-rating-star">
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="" />
                  </div>
                  <span className="home-product__item-rating-number">
                    2 Đánh giá
                  </span>
                </div>
                <div className="home-product__item-sale">
                  <span>Giảm 13%</span>
                </div>
              </a>
            </div>

            <div className="col-2-4 home-product__item-wrap" >
              <a className="home-product__item p-3" href="#">
                <div className="home-product__box-img">
                  <img
                    className="home-product__item-img"
                    src="./images/products/product1.jpg" alt="Samsung Galaxy S22 Ultra (8GB - 128GB)"
                  /></div>
                <h3 className="home-product__item-name">
                  Samsung Galaxy S22 Ultra (8GB - 128GB)
                </h3>
                <div className="home-product__item-price">
                  <span className="home-product__item-price-new"
                  >₫6.350.000</span
                  >
                  <span className="home-product__item-price-old"
                  >₫7.990.000</span
                  >
                </div>
                <div className="home-product__item-rating">
                  <div className="home-product__item-rating-star">
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="" />
                  </div>
                  <span className="home-product__item-rating-number">
                    2 Đánh giá
                  </span>
                </div>
                <div className="home-product__item-sale">
                  <span>Giảm 13%</span>
                </div>
              </a>
            </div>

            <div className="col-2-4 home-product__item-wrap" >
              <a className="home-product__item p-3" href="#">
                <div className="home-product__box-img">
                  <img
                    className="home-product__item-img"
                    src="./images/products/product1.jpg" alt="Samsung Galaxy S22 Ultra (8GB - 128GB)"
                  /></div>
                <h3 className="home-product__item-name">
                  Samsung Galaxy S22 Ultra (8GB - 128GB)
                </h3>
                <div className="home-product__item-price">
                  <span className="home-product__item-price-new"
                  >₫6.350.000</span
                  >
                  <span className="home-product__item-price-old"
                  >₫7.990.000</span
                  >
                </div>
                <div className="home-product__item-rating">
                  <div className="home-product__item-rating-star">
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="" />
                  </div>
                  <span className="home-product__item-rating-number">
                    2 Đánh giá
                  </span>
                </div>
                <div className="home-product__item-sale">
                  <span>Giảm 13%</span>
                </div>
              </a>
            </div>

            <div className="col-2-4 home-product__item-wrap" >
              <a className="home-product__item p-3" href="#">
                <div className="home-product__box-img">
                  <img
                    className="home-product__item-img"
                    src="./images/products/product1.jpg" alt="Samsung Galaxy S22 Ultra (8GB - 128GB)"
                  /></div>
                <h3 className="home-product__item-name">
                  Samsung Galaxy S22 Ultra (8GB - 128GB)
                </h3>
                <div className="home-product__item-price">
                  <span className="home-product__item-price-new"
                  >₫6.350.000</span
                  >
                  <span className="home-product__item-price-old"
                  >₫7.990.000</span
                  >
                </div>
                <div className="home-product__item-rating">
                  <div className="home-product__item-rating-star">
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="" />
                  </div>
                  <span className="home-product__item-rating-number">
                    2 Đánh giá
                  </span>
                </div>
                <div className="home-product__item-sale">
                  <span>Giảm 13%</span>
                </div>
              </a>
            </div>

            <div className="col-2-4 home-product__item-wrap" >
              <a className="home-product__item p-3" href="#">
                <div className="home-product__box-img">
                  <img
                    className="home-product__item-img"
                    src="./images/products/product1.jpg" alt="Samsung Galaxy S22 Ultra (8GB - 128GB)"
                  /></div>
                <h3 className="home-product__item-name">
                  Samsung Galaxy S22 Ultra (8GB - 128GB)
                </h3>
                <div className="home-product__item-price">
                  <span className="home-product__item-price-new"
                  >₫6.350.000</span
                  >
                  <span className="home-product__item-price-old"
                  >₫7.990.000</span
                  >
                </div>
                <div className="home-product__item-rating">
                  <div className="home-product__item-rating-star">
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="" />
                  </div>
                  <span className="home-product__item-rating-number">
                    2 Đánh giá
                  </span>
                </div>
                <div className="home-product__item-sale">
                  <span>Giảm 13%</span>
                </div>
              </a>
            </div>

            <div className="col-2-4 home-product__item-wrap" >
              <a className="home-product__item p-3" href="#">
                <div className="home-product__box-img">
                  <img
                    className="home-product__item-img"
                    src="./images/products/product1.jpg" alt="Samsung Galaxy S22 Ultra (8GB - 128GB)"
                  /></div>
                <h3 className="home-product__item-name">
                  Samsung Galaxy S22 Ultra (8GB - 128GB)
                </h3>
                <div className="home-product__item-price">
                  <span className="home-product__item-price-new"
                  >₫6.350.000</span
                  >
                  <span className="home-product__item-price-old"
                  >₫7.990.000</span
                  >
                </div>
                <div className="home-product__item-rating">
                  <div className="home-product__item-rating-star">
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="" />
                  </div>
                  <span className="home-product__item-rating-number">
                    2 Đánh giá
                  </span>
                </div>
                <div className="home-product__item-sale">
                  <span>Giảm 13%</span>
                </div>
              </a>
            </div>
            <div className="col-2-4 home-product__item-wrap" >
              <a className="home-product__item p-3" href="#">
                <div className="home-product__box-img">
                  <img
                    className="home-product__item-img"
                    src="./images/products/product1.jpg" alt="Samsung Galaxy S22 Ultra (8GB - 128GB)"
                  /></div>
                <h3 className="home-product__item-name">
                  Samsung Galaxy S22 Ultra (8GB - 128GB)
                </h3>
                <div className="home-product__item-price">
                  <span className="home-product__item-price-new"
                  >₫6.350.000</span
                  >
                  <span className="home-product__item-price-old"
                  >₫7.990.000</span
                  >
                </div>
                <div className="home-product__item-rating">
                  <div className="home-product__item-rating-star">
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="rating-star--gold" />
                    <Icon path={mdiStar} size={1} className="" />
                  </div>
                  <span className="home-product__item-rating-number">
                    2 Đánh giá
                  </span>
                </div>
                <div className="home-product__item-sale">
                  <span>Giảm 13%</span>
                </div>
              </a>
            </div>


          </div>
        </div>

      </div>
    </div >
  );
};

export default ProductByCategory;
