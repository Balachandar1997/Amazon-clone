import React from 'react'
import "./Home.css";
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className="amazon_banner_image01" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42868420_.jpg" alt="banner01" />
        </div>
        <div className="home__row">
            <Product title="The lean startup" 
            id={1}
            price={29.99}
            image="https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg" 
            rating={5} />
            <Product title="Do it Today" 
            key={2}
            price={35} 
            image="https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY218_.jpg" 
            rating={5} />
            
        </div>
        <div className="home__row">
            <Product title="The Theory of Everything" 
            id={3}
            price={50} 
            image="https://m.media-amazon.com/images/I/51oHUvYzbsL._AC_UY218_.jpg" 
            rating={4}/>
            <Product title="The power of a positive attitude" 
            id={4}
            price={80} 
            image="https://m.media-amazon.com/images/I/81JByBEqw+S._AC_UY218_.jpg" 
            rating={4}/>
            <Product title="Think and grow rich" 
            id={5}
            price={45} 
            image="https://m.media-amazon.com/images/I/711xMzVPIuL._AC_UY218_.jpg" 
            rating={5} />
           
            
        </div>
        <div className="home__row">
            <Product title="Karma : A Yogi's guide to crafting your destiny" 
            id={6}
            price={45} 
            image="https://m.media-amazon.com/images/I/91xafByFlLL._AC_UY218_.jpg" 
            rating={4}/>
            
            
        </div>
    </div>

  )
}

export default Home