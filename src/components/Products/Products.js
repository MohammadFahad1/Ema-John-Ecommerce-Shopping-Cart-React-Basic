import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='container flex-center'>
            <div className="products-container">
                <h3>Total {products.length} Products Found!</h3>
                <div className="products">
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
            <div className="cart">
                <h1>Cart</h1>
            </div>
        </div>
    );
};

export default Products;