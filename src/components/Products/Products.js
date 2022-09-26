import React, { useEffect, useState } from 'react';
import CartProduct from '../CartProduct/CartProduct';
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

    const checkDuplicates = data => {
        const getIndex = cart.indexOf(data);
        return getIndex;
    }

    const addToCart = product => {
        const checkDuplicate = checkDuplicates(product);
        if (checkDuplicate < 0) {
            const newCart = [...cart, product];
            setCart(newCart);
        }
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
                {
                    // cart.map((prod, index) => <li key={index}><img src={prod.img} alt="" style={{ maxWidth: "30px" }} />{prod.name}</li>)
                    cart.map((prod) => <CartProduct product={prod} key={prod.id}></CartProduct>)
                }
            </div>
        </div>
    );
};

export default Products;