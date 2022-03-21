import { mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import ProductCard from "../Common/ProductCard";
import "../../scss/components/Home/ProductByCategory.scss";

const ProductByCategory = () => {
  return (
    <div className="grid wide">
      <div className="home-product row">
        <div className="home-product-heading">
          <a href="/" className="home-product-title">
            Điện thoại nổi bật
          </a>
          <a href="/" className="home-product__see-all">
            See All
            <Icon path={mdiChevronRight} size={1.4} />
          </a>
        </div>
        <div className="grid wide home-product-container">
          <div className="row">
            <div className="col-2-4 home-product__item-wrap">
              <ProductCard />
            </div>
            <div className="col-2-4 home-product__item-wrap">
              <ProductCard />
            </div>
            <div className="col-2-4 home-product__item-wrap">
              <ProductCard />
            </div>
            <div className="col-2-4 home-product__item-wrap">
              <ProductCard />
            </div>
            <div className="col-2-4 home-product__item-wrap">
              <ProductCard />
            </div>
            <div className="col-2-4 home-product__item-wrap">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductByCategory;
