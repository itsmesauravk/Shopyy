import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
    let cart = {};
    for (const product of products) {
        cart[product.id] = 0;
    }
    return cart;
};


// const [cartItems, setCartItems] = useState(() => getDefaultCart(all_product));


const ShopContextProvider = (props) => {
    const [all_product, setAllProduct] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=> response.json())
        .then((data)=>setAllProduct(data.products))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:"",
            })
            .then((res)=>res.json())
            .then((data)=>{setCartItems(data)})
        }
    },[])

const [cartItems, setCartItems] = useState(() => getDefaultCart(all_product));



    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };
            return updatedCart;
        });
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data));
        }
        // return updatedCart;
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: Math.max(0, prev[itemId] - 1) }));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((res)=>res.json())
            .then((data)=>console.log(data));
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount= 0;
        for (const item in cartItems) {
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=> product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if(cartItems[item]>0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = {getTotalCartItems,getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
