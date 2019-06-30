import React from "react";
import Welcome from "./Welcome"
import { ProductCarousel } from "./Carousel"
import ShopButton from "./ShopButton"
import "../styles/Carousel.css"
import "../index.css"
const Home = () => {
    
    return (
<div className="flex-container-row">
<div className="col-1"></div>
<div className="flex=contaner-column">
<Welcome />  {/*rubric04 */} 
 <ProductCarousel />
 <ShopButton /> {/*rubric05 */}
</div>
<div className="col-1"></div>
</div>
    );
  };
  
  export default Home;