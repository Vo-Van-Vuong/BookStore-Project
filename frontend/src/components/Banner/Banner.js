import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";


import BookeBanner1 from "../../public/images/carousel1.jpg";
import BookeBanner2 from "../../public/images/carousel3.jpg";
import BookeBanner3 from "../../public/images/carousel2.jpg";
import LogoBanner from "../../public/images/logo-banner.jpg";
import "./Banner.css";

export default class Banner extends Component {
  render() {
    return (
      <div>
        
          <img className="my-img" src={LogoBanner} />
          
        
        <Carousel className="my-carousel">
          <Carousel.Item>
            <img
              className="d-block my-wall"
              src={BookeBanner1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block my-wall"
              src={BookeBanner2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block my-wall"
              src={BookeBanner3}
              alt="Third slide"
            />

            
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
