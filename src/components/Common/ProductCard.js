import { mdiStar } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import "../../scss/components/ProductCart.scss";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Link className="home-product__item p-3" to={`/products/${product.id}`}>
        <div className="home-product__box-img">
          <img
            className="home-product__item-img"
            src={product.image}
            alt={product.title}
          />
        </div>
        <h3 className="home-product__item-name">{product.title}</h3>
        <div className="home-product__item-price">
          <span className="home-product__item-price-new">
            <NumberFormat
              value={product.price * 23000}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={0}
              suffix=" ₫"
            />
          </span>
          {product.salePrice && (
            <span className="home-product__item-price-old">
              ₫{product.salePrice}
            </span>
          )}
        </div>
        <div className="home-product__item-rating">
          <div className="home-product__item-rating-star">
            <Icon path={mdiStar} size={1} />
            <Icon path={mdiStar} size={1} />
            <Icon path={mdiStar} size={1} />
            <Icon path={mdiStar} size={1} />
            <Icon path={mdiStar} size={1} />
            <div
              className="rating-children"
              style={{ width: `${product.rating.rate * 20}%` }}
            >
              <Icon path={mdiStar} size={1} className="rating-star--gold" />
              <Icon path={mdiStar} size={1} className="rating-star--gold" />
              <Icon path={mdiStar} size={1} className="rating-star--gold" />
              <Icon path={mdiStar} size={1} className="rating-star--gold" />
              <Icon path={mdiStar} size={1} className="rating-star--gold" />
            </div>
          </div>

          <span className="home-product__item-rating-number">
            {product.rating.count} Đánh giá
          </span>
        </div>
        {product.salePrice && (
          <div className="home-product__item-sale">
            <span>Giảm 13%</span>
          </div>
        )}
      </Link>
    </div>
  );
};

export default ProductCard;
