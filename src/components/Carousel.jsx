import React from "react";
import Carousel from "react-bootstrap/Carousel"
import "../styles/Carousel.css"
import "../index.css"
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
      let interval = null;
      if (document.getElementById("slidetoggle") == true) {
        interval = 300;
      }
    return (
<div>
  {/*rubric06 */}
<label className="switch">
  <input type="checkbox" id="slidetoggle"></input>
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
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 clasName="caption">{this.props.children}</h3>
            <p className="text">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://webmppcapstone.blob.core.windows.net/fruitsimages/avocado.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="caption">Second slide label</h3>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://webmppcapstone.blob.core.windows.net/fruitsimages/banana.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="caption">Third slide label</h3>
            <p className="text">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
</div>
    );
  };
};
