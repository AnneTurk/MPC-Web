import React from "react";
import Carousel from "react-bootstrap/Carousel"
import "../styles/Carousel.css"
import "../index.css"
const ProductCarousel = () => {
    return (
<div>
  {/*rubric06 */}
<label className="switch">
  <input type="checkbox"></input>
  <span className="slider round"></span>
  </label>
  <label className="toggletext">Toggle Slide show </label> 

<Carousel className="carousel"> {/* rubric01-rubric03 + rubric07-rubric08  */}
  <Carousel.Item className="carouselitem">
    <img
      className="d-block"
      src="https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babybib.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="carouselcaption">First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carouselitem">
    <img
      className="d-block"
      src="https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babyblanket.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="carouselcaption">Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carouselitem">
    <img
      className="d-block"
      src="https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babyBottle.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="carouselcaption">Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
  };


  export default ProductCarousel;