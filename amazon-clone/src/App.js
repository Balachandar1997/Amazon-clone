//import logo from './logo.svg';
import './App.css';
import MainHome from './components/MainHome';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Checkout from './components/Checkout';
import Signin from './components/Signin';
function App() {
  return (
    <Router>
     <div className="App">
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<MainHome />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
     
     </div>
    </Router>
  );
}

export default App;
