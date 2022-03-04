import React from 'react'

const ProductInfo = ( product ) => {
    console.log(product);
  return (
    <div>{product.product.map(item => (
        <h1 key={item.id}> {item.title}</h1>
    ))}</div>
  )
}

export default ProductInfo