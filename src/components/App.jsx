import React from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBarHead from "./Header";
import NavBarFoot from "./Footer";
import Home from "./Home"; 
import Shopping from "./Shopping"; 
import Category from "./Category";
import Product from "./Product"; 
import Cart from "./Cart"; 
import Contact from "./Contact"; 
import About from "./About"; 
import Error from "./Error.jsx";
import "../index.css"

const App = () => {
  return (
    <HashRouter basename="/">
      <header>{/* -rubric68 */}
      <NavBarHead />
      </header>
      <body>
      <br></br>
      <Switch>
      <Route exact path="/" component={Home}/> {/*-rubric13 + -rubric76 + -rubric69 */}
      <Route exact path="/shopping" component={Shopping} />{/*-rubric34 + -rubric70*/}
      <Route path="/shopping/:id" component={Category} />
      <Route path="/product/:id" component={Product} />{/*-rubric46*/}
      <Route path="/cart" component={Cart} /> {/*-rubric56 + -rubric71*/}
      <Route path="/contact" component={Contact} />{/*-rubric62 + -rubric78 */}
      <Route path="/about" component={About} /> {/*-rubric64 = -rubric77*/}
      <Route component={Error} />
      </Switch>
      <br></br>
      </body>
      <footer> {/*-rubric72*/}
      <NavBarFoot />
      </footer>
    </HashRouter>
  );
};


export default App;
