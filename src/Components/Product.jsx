import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, removefromcart } from '../Redux/action';

const Product = ({ card }) => {
  const dispatch = useDispatch();
  const [state,setstate]=useState(false);
  const cart = useSelector((state) => state.cart);
// console.log(cart);
  const isProductInCart = cart.cartItems.some((item) => item.id === card.id);

  const handleCart = (isProductInCart) => {
    if (!isProductInCart) {
      dispatch(addtocart(card));
      setstate(true);
    } else {
      dispatch(removefromcart(card.id));
    //   console.log(card.id);
      setstate(false);
    }
  };

  return (
    <div >
      <div style={{ boxShadow: '0 0 10px black' }}>
        <img width="200px" style={{aspectRatio:"1/1"}} src={card.image} alt={card.name} />
        <h3>{card.name}</h3>
        <p>{card.weight}</p>
        <h2>₹{card.price}</h2>
  
        <div>
          
          <button onClick={()=>{handleCart(isProductInCart)}}>
            {state?"-":"+"}
          </button>
        </div>
      </div>
    </div>
  );
};

export { Product };
