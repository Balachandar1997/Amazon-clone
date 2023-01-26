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
            <Product title="ASUS Vivobook 15, 15.6-inch (39.62 cms) FHD, AMD Ryzen 5 3500U" 
            id={1}
            price={29.99}
            image="https://m.media-amazon.com/images/I/41CQCMPCSdL._AC_SY200_.jpg" 
            rating={5} />
            <Product title="Fire TV Stick with Alexa Voice Remote" 
            key={2}
            price={35} 
            image="https://m.media-amazon.com/images/I/41X3b+uMQGL._AC_UY218_.jpg" 
            rating={5} />
            
        </div>
        <div className="home__row">
            <Product title="Nivia Storm Football | Rubberized Moulded |" 
            id={3}
            price={50} 
            image="https://m.media-amazon.com/images/I/61RpRYFb2wL._AC_UL320_.jpg" 
            rating={4}/>
            <Product title="FEROC 2 Pieces Aluminium Badminton Racket with 3 Pieces" 
            id={4}
            price={80} 
            image="https://m.media-amazon.com/images/I/71Jq43IodUL._AC_UL320_.jpg" 
            rating={4}/>
            <Product title="STEP OVER || Foosball Table || Certified Wood" 
            id={5}
            price={45} 
            image="https://m.media-amazon.com/images/I/51AXmFq4cqL._AC_UL640_QL65_.jpg" 
            rating={5} />
           
            
        </div>
        <div className="home__row">
            <Product title="Leader Scout MTB 26T Mountain Bicycle/Bike Without Gear Single Speed for Men" 
            id={6}
            price={45} 
            image="https://m.media-amazon.com/images/I/81wGn2TQJeL._AC_UY218_.jpg" 
            rating={4}/>
            
            
        </div>
        <div className="home__row">
            <Product title="Smasung M13" 
            id={1}
            price={29.99}
            image="https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UY218_.jpg" 
            rating={5} />
            <Product title="Poco m2 8GB ram" 
            key={2}
            price={35} 
            image="https://m.media-amazon.com/images/I/71Ta0Hcl+PL._AC_UY218_.jpg" 
            rating={5} />
            
        </div>
    </div>

  )
}

export default Home