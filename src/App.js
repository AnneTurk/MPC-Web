import React from 'react';
import './App.css';
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => <div> Home </div>;
const Shopping = () => <div>Shopping</div>;
const Product = ({match}) => <div>Product Page</div>;
const Cart = () => <div>Cart Page</div>;
const Contact = () => <div>Contact Page</div>;
const About = () => <div>About page</div> 

function App() {
  return (
    <BrowserRouter>
      <header className="">
      </header>
    <div className="App">
    <div>
      <ul>
        <li>
          <Link to="/#/">Home</Link>
        </li>
        <li>
          <Link to="/#/shopping">Shopping Page</Link>
        </li>
        <li>
          <Link to="/#/product">Product Page</Link>{" "}
        </li>
        <li>
          <Link to="/#/cart">Cart Page</Link>
        </li>
        <li>
          <Link to="/#/contact">Contact Page</Link>
        </li>
        <li>
          <Link to="/#/about">About Page</Link>
        </li>
      </ul>
      <hr/>
      <Route path="/#/" component={Home}/> {/*-rubric13 */}
      <Route path="/#/shopping" component={Shopping} />{/*-rubric34 */}
      <Route path="/#/product" component={Product} />{/*-rubric46 */}
      <Route path="/#/cart" component={Cart} />{/*-rubric56 */}
      <Route path="/#/contact" component={Contact} />{/*-rubric62 */}
      <Route path="/#/about" component={About} />{/*-rubric64 */}
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
