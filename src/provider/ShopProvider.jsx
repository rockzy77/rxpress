import React, { useState } from 'react';

const ShopContext = React.createContext();

const ShopProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: 'Demo',
            des: 'loremfsdfcsd sdfsd fsdf sdf sdfsdfs df',
            price: 500,
            quantity: 2,
            limit: 10
        },
        {
            id: 2,
            title: 'Demo 2',
            des: 'loremfsdfcsd sdfsd fsdf sdf sdfsdfs df',
            price: 300,
            quantity: 1,
            limit: 5
        }
    ]);

    // const [mainProduct, setMainProduct] = useState({});

    const addToCart = (item) => {
        var t = cartItems;
        t.push(item);
        setCartItems(t);
    }

    // const []

    return <ShopContext.Provider value={{
        cartItems: cartItems,
        setCartItems: setCartItems,
        addToCart: addToCart
    }}>
        {children}
    </ShopContext.Provider>
}

export {ShopContext, ShopProvider};