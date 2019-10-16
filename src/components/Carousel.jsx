import React from "react";
import Carousel from "react-bootstrap/Carousel"
import "../styles/Carousel.css"
import "../index.css"

var interval = null;

function toggle(){
  if (document.getElementById("slidetoggle").checked == true) {
    console.log("checked")
    interval = 300;
  }
  else {
    console.log("unchecked")
    interval = null;
  }
}
export class ProductCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
    return (
<div>
  {/*rubric06 */}
<label className="switch">
  <input type="checkbox" id="slidetoggle" onChange={toggle} ></input>
  <span className="slider round"></span>
  </label>
  <label className="toggletext">Toggle Slide show </label> 
      
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        interval={interval}
      >
        <Carousel.Item>
          <img
            className="d-block"
            src="https://webmppcapstone.blob.core.windows.net/fruitsimages/apricot.jpg"
            alt="Apricot"
          />
          <Carousel.Caption>
            <h3 clasName="caption">Apricot</h3>
            <a className="link" href="http://localhost:8080/#/product/apricot">Buy a Apricot</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://webmppcapstone.blob.core.windows.net/fruitsimages/avocado.jpg"
            alt="Avocado"
          />

          <Carousel.Caption>
            <h3 className="caption">Avocado</h3>
            <a className="link" href="http://localhost:8080/#/product/avocado">Buy an avocado</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://webmppcapstone.blob.core.windows.net/fruitsimages/banana.jpg"
            alt="Banana"
          />

          <Carousel.Caption>
            <h3 className="caption">Banana</h3>
          <a className="link" href="http://localhost:8080/#/product/banana">Buy a banana</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
</div>
    );
  };
};
