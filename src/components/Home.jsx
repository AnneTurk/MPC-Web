import React from "react";
import Welcome from "./Welcome"
import ProductCarousel from "./Carousel"
import ShopButton from "./ShopButton"
import "../styles/Carousel.css"
import "../index.css"
const Home = () => {
    
    return (
<div>
 <Welcome />  {/*rubric04 */} 
 <ProductCarousel />
 <ShopButton /> {/*rubric05 */}
</div>
    );
  };
  
  export default Home;