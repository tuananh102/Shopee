import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductInfo from "../components/Product/ProductInfo";
import { useParams } from "react-router-dom";
import productApi from "../api/productApi";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  useEffect(() => {
    productApi
      .getById(id)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
    return () => setProduct(null);
  }, [id]);

  // const userList = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const action = addToCart(newProduct);
  // dispatch(action);
  // console.log(userList);
  return <main>{product && <ProductInfo product={product} />}</main>;
};

export default ProductDetails;
