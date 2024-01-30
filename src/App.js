// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import Product from './Components/Product';
// import {Switch, Route} from 'react-router-dom';
import {
  // BrowserRouter as Router,
  Routes,
  // Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home key = "home"/>}/>
          <Route exact path="/products" element={<Products key="products"/>}/>
          <Route exact path="/products/:id" element={<Product/>}/>
        </Routes>
    </>
  );
}

export default App;
