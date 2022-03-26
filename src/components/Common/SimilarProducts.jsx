import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
import ProductCart from "./ProductCard";
import "../../scss/components/SimilarProducts.scss";
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
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <div className="grid wide similar-product">
      <h3 className="similar-product-heading">Similar Products</h3>
      <Slider {...settings}>
        {products &&
          products.map((item) => <ProductCart product={item} key={item.id} />)}
      </Slider>
    </div>
  );
};

export default SimilarProducts;
