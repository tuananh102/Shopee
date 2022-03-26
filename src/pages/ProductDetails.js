// import ProductInfo from "../components/ProductInfo";
// import useQuery from "hooks/useQuery";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductInfo from "../components/Product/ProductInfo";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  console.log("ID", id);
  useEffect(() => {
    axios
      .get(`products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
    window.scrollTo(0, 0);
    return () => setProduct(null);
  }, [id]);
  return <main>{product && <ProductInfo product={product} />}</main>;
};

export default ProductDetails;
