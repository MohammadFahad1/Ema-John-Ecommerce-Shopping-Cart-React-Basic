import React from 'react';
import './CartProduct.css';

const CartProduct = ({ product }) => {
    return (
        <div className='cart-product'>
            <img src={product.img} alt="" style={{ maxWidth: "30px", maxHeight: "30px" }} />
            <div className="cart-product-info">
                <h4>{product.name}</h4>
                <p>{product.category}</p>
                <p>Price:{product.price}</p>
            </div>
        </div>
    );
};

export default CartProduct;