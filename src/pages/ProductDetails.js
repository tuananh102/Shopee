import React from 'react'
import { useParams } from 'react-router-dom'
import useQuery from '../hooks/useQuery'
import ProductInfo from '../components/ProductInfo'

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useQuery(`/posts`);
  return (  
    <main>
      { product && <ProductInfo product = {product} />}
      { loading && <h2>Loading....</h2>}
      { error && <h2>{error}</h2>}
    </main>
  );
}

export default ProductDetails