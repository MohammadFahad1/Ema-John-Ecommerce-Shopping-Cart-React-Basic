import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, category, img, price, rating } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3>Name: {name}</h3>
                <p>Category: {category}</p>
                <p>Rating: {rating}</p>
                <h3>Price: {price}</h3>
            </div>
        </div>
    );
};

export default Product;