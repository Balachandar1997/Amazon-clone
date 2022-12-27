import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import {Link} from "react-router-dom"
import { useStateValue } from './Stateprovider';


const Header = () => { 
    const[{basket},dispatch]=useStateValue();

  console.log(dispatch)

     return (
    <div className='Header'>
        <Link to="/">
        <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon logo" />
        </Link>
        <div className="header_search">
            <input className='header_searchinput' type="text" /><SearchIcon className='header_searchinput_icon' />
            
        </div>

        <div className="header_nav">
            <Link  to="/signin">
              <div className='header_option'>
                   <span className='header_option_lineone'>Hello</span>
                   <span className='header_optiion_linetwo'>Sign in</span>
              </div>
            </Link>
            <div className='header_option'>
                  <span className='header_option_lineone'>Returns</span>
                   <span className='header_optiion_linetwo'>& Orders</span>
                
            </div>
            <div className='header_option'>
                  <span className='header_option_lineone'>Your</span>
                   <span className='header_optiion_linetwo'>Prime</span>
                
            </div>
        </div>
        
        <Link to="/checkout">
         <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className= 'header_optiion_linetwo header_option_basketcount'>{basket?.length}</span>
         </div>
        </Link>
    </div>
  )
}

export default Header