import React from "react";
import Welcome from "./Welcome"
import ProductCarousel from "./Carousel"
import ShopButton from "./Shopbutton"
import "../styles/Carousel.css"

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