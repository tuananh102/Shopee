import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
import ProductCart from "./ProductCard";
import "../../scss/components/Product/SimilarProducts.scss";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
const SimilarProducts = ({ catId }) => {
  console.log(catId);

  const [products, setProducts] = useState();
  useEffect(() => {
    axios
      .get(`products/category/${catId}`)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
    return () => setProducts(null);
  }, [catId]);
  // Slider settings
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <div className="grid wide similar-product">
      <div className="similar-product-heading">
        <h3>Similar Products</h3>
        <Link
          to={`/product/category/${catId}`}
          className="home-product__see-all"
        >
          See All
          <Icon path={mdiChevronRight} size={1.4} />
        </Link>
      </div>
      <Slider {...settings}>
        {products &&
          products.map((item) => <ProductCart product={item} key={item.id} />)}
      </Slider>
    </div>
  );
};

export default SimilarProducts;
