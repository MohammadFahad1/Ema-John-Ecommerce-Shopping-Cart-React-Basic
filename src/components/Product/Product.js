import React, { useState } from 'react';
import './Product.css';

const Product = ({ product, addToCart }) => {
    const [cartbtn, setCartbtn] = useState(false);
    const { name, category, img, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>Name: {name}</h3>
                <p>Category: {category}</p>
                <p>Rating: {ratings}</p>
                <h3>Price: {price}</h3>
                <button onClick={() => { addToCart(product); setCartbtn(!cartbtn); }} className='addToCart' disabled={cartbtn}>{cartbtn ? 'Added' : 'Add To Cart'}</button>
            </div>
        </div>
    );
};

export default Product;