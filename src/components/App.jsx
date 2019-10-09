import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import NavBarHead from "./Header";
import NavBarFoot from "./Footer";
import Home from "./Home"; 
import Shopping from "./Shopping"; 
import {CategoryPage} from "./CategoryPage";
import SubCategoryOverview from './SubcategoryOverview';
import Product from "./Product"; 
import Cart from "./Cart"; 
import Contact from "./Contact"; 
import About from "./About"; 
import Error from "./Error.jsx";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import "../index.css";

library.add(fab, fas);

const App = () => {
  return (
    <BrowserRouter basename="/#">
      <header id="header">{/* -rubric68 */}
      <NavBarHead className="col-12" />
      </header>
      <body id="body">
      <br></br>
      <Switch>
      <Route exact path="/" component={Home}/> {/*-rubric13 + -rubric76 + -rubric69 */}
      <Route exact path="/shopping" component={Shopping} />{/*-rubric34 + -rubric70*/}
      <Route path="/shopping/:category/:subcategory" component={SubCategoryOverview} />
      <Route path="/shopping/:category" component={CategoryPage} />
      <Route path="/product" component={Product} />{/*-rubric46*/}
      <Route path="/cart" component={Cart} /> {/*-rubric56 + -rubric71*/}
      <Route path="/contact" component={Contact} />{/*-rubric62 + -rubric78 */}
      <Route path="/about" component={About} /> {/*-rubric64 = -rubric77*/}
      <Route component={Error} />
      </Switch>
      <br></br>
      </body>
      <footer id="footer"> {/*-rubric72*/}
      <NavBarFoot className="col-12"/>
      </footer>
    </BrowserRouter>
  );
};


export default App;
