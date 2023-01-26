import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from './Stateprovider'
import CheckoutProduct from './CheckoutProduct'
import Header from './Header'
import { Link,  useNavigate } from 'react-router-dom'
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { getBasketTotal } from './Reducer'
import CurrencyFormat from 'react-currency-format'
import { useEffect } from 'react'
import axios from './axios'
import Footer from './Footer'

const Payment = () => {
    const[{basket,user},dispatch]=useStateValue()

    const[Error,setError]=useState(null)
    const[disabled,setDisabled]=useState(true)


    const stripe = useStripe();
    const elements= useElements();

    const[processing,setProcessing]=useState("")
    const[succeeded,setSucceeded]=useState(false)
    const[clientSecret,setClientSecret]=useState(true)

    const navigate=useNavigate()

    useEffect(()=>{
          const getClientSecret = async()=>{
            const response=await axios({
                method:'post',
                //stripe expects the total in currencies subunit
                url:`/payment/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret)
          }
          getClientSecret();
    },[basket])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            setSucceeded(true);
            setError(null);
            setProcessing(false)

            navigate('/orders',{replace:true})
        })


    }

    const handleChange=e=>{
        //listen the changes in card element
        //display the errors as the customer types their card details
        setDisabled(e.target.empty)
        setError(e.target.error ? e.error.message : "")

    }
  return (
    <div className='payment'>
        <Header />
        <div className='payment_container'>
            <h1>Checkout(
                  <Link to="/checkout">{basket?.length} items</Link>
                )</h1>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery address </h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>North Street</p>
                    <p>Coimbatore,TN</p>
                </div>

            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment_items'>
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
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment method</h3>
                </div>
                <div className='payment_details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>

                        <div className='payment_priceContainer'>
                        <CurrencyFormat 
                           renderText={(value)=>(
                          <h3>Order total:{value}</h3>
                           )}
                           decimalScale={2}
                           value={getBasketTotal(basket)}
                           displayType={"text"}
                           thousandSeparator={true}
                           prefix={"$"}
                        />
                        <button >
                          <span> Buy now</span>
                        </button>

                        </div>
                    </form>

                </div>
                
            </div>
        </div>
        <Footer />
        
    </div>
  )
}

export default Payment