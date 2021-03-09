import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./Banner.css";

export default class Banner extends Component {
  render() {
    return (
      <div>
        
          <img className="my-img" src="/images/logo-banner.jpg" />
          
        
        <Carousel className="my-carousel">
          <Carousel.Item>
            <img
              className="d-block my-wall"
              src="/images/carousel1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block my-wall"
              src="/images/carousel3.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block my-wall"
              src="/images/carousel2.jpg"
              alt="Third slide"
            />

            
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
