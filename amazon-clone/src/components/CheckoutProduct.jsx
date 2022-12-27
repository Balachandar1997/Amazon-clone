import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './Stateprovider'

const CheckoutProduct = ({id,image,title,price,rating}) => {
    const[{basket},dispatch]=useStateValue()

    const removefrombasket=()=>{
        //remove item from the basket
         dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
         })

    }
  return (
    <div className='checkoutProduct'>
       <img className='checkoutProduct_image' src={image} alt="checkout_image"/>   
       <div className='checkoutproduct_info'>
          <p className='checkoutProduct_title'>{title}</p>
          <p className='checkoutProduct_price'>${price}</p>
          <div className='checkoutProduct_rating'>
          {Array(rating).fill().map((_,i)=>(
            <p>⭐</p>
          ))}
          </div>
          <button onClick={removefrombasket}>Remove from basket</button>
       </div>

    </div>
  )
}

export default CheckoutProduct