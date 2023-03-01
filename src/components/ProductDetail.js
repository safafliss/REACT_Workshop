import React from 'react'
import { useParams } from 'react-router-dom';
import products from "../products.json";
function ProductDetail() {
    const { name } = useParams();
    const product = products.find(p => p.name === name);
  return (
    <>
    <img src={require("../assets/images/" + product.img)}/>
    <h1>{name}</h1>
    <p>Description: {product.description}</p>
    <p>Price: {product.price}DT</p>
    <p>Likes: {product.like}</p>
    </>
  )
}

export default ProductDetail