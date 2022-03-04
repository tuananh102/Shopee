import React from "react";
import ProductCard from "./ProductCard";

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
