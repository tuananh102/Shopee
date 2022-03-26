import React from "react";
import ProductCard from "../Common/ProductCard";

function Product(products) {
  return (
    <div>
      {products &&
        products.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default Product;
