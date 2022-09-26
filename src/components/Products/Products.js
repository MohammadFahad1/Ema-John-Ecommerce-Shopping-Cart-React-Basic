import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='container x-center g-20'>
            <div className="products-container">
                <h3>Total {products.length} Products Found!</h3>
                <div className="products">
                    {
                        products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                    }
                </div>
            </div>
            <div className="cart">
                <h1>Cart: {cart.length}</h1>
            </div>
        </div>
    );
};

export default Products;