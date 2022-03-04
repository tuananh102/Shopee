import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import useQuery from '../hooks/useQuery'
const Home = () => {
  const [products, setProducts] = useState([]);
  const {data, loading, error} = useQuery(`/posts`);

  useEffect(()=> {
    if(data) setProducts(data);
  },[data])
  return (
    <div>
      {products && <Product products = {products} />}
      { loading && <h2>Loading....</h2>}
      { error && <h2>{error}</h2>}
    </div>
  )
}

export default Home