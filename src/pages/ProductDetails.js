import ProductInfo from "components/ProductInfo";
import useQuery from "hooks/useQuery";
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useQuery(`/posts`);
  return (
    <main>
      {product && <ProductInfo product={product} />}
      {loading && <h2>Loading....</h2>}
      {error && <h2>{error}</h2>}
    </main>
  );
};

export default ProductDetails;
