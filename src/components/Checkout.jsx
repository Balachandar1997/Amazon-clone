import React from 'react'
import Header from './Header'
import "./Checkout.css"
import Subtotal from './Subtotal';
//import { getBasketTotal } from './Reducer';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './Stateprovider';
import Footer from './Footer';

const Checkout = () => {
  const[{basket,user}]=useStateValue()

  return (
    <div >
        <Header />
        <div className="checkout">
        <div className='checkout_left'>
          <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/Nov/MEDH_SWM_1500x200.jpg" alt="" width="100%"/>
        <div>
          <h3>Hello, {user?.email}</h3>
           <h2 className='checkout_title'>Your Shopping Basket</h2>
           {basket.map(item=>(
            <CheckoutProduct 
             id={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
             rating={item.rating}
            />
           ))}
        </div>
        </div>
        <div className="checkout_right">

            <Subtotal />
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout