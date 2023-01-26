//import logo from './logo.svg';
import './App.css';
import MainHome from './components/MainHome';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Checkout from './components/Checkout';
import Signin from './components/Signin';
import { useEffect } from 'react';
import { auth } from './components/firebase';
import { useStateValue } from './components/Stateprovider';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';



const promise = loadStripe('pk_test_51MUP3oSIa4r0njlknOfoyBsc7em5mxhAASzcXousE1LtsSjK18qw70uJRaCXDYWojdB5C15lxjhqAAZdqNuhZmr000AmNc8HB4')



function App() {
  const[{},dispatch]=useStateValue()
  useEffect(()=>{
     auth.onAuthStateChanged(authuser=>{
      console.log('The User is >>>',authuser)

      if(authuser){
        //when the user loggen in
        dispatch({
          type:'SET_USER',
          user:authuser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null

        })
      }
     })

  },[])

  return (
    <Router>
     <div className="App">
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<MainHome />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements> } />
      </Routes>
     
     </div>
    </Router>
  );
}

export default App;
