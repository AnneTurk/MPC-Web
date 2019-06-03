import React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"; 
import Shopping from "./Shopping"; 
import Product from "./Product"; 
import Cart from "./Cart"; 
import Contact from "./Contact"; 
import About from "./About"; 
import Error from "./Error.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
      <Route exact path="/" component={Home}/> {/*-rubric13, without the # as this broke the code */}
      <Route path="/shopping" component={Shopping} />{/*-rubric34 without the # as this broke the code*/}
      <Route path="/product" component={Product} />{/*-rubric46 without the # as this broke the code*/}
      <Route path="/cart" component={Cart} /> {/*-rubric56 without the # as this broke the code */}
      <Route path="/contact" component={Contact} />{/*-rubric62 without the # as this broke the code*/}
      <Route path="/about" component={About} /> {/*-rubric64 without the # as this broke the code*/}
      <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
