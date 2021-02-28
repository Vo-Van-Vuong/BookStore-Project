import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "react-bootstrap/Dropdown";

import BookeBanner from "../../public/images/bookbanner.jpg";
import SaleOff from "../../public/images/sale.png";
import "./Banner.css";

export default class Banner extends Component {
  render() {
    return (
      <div>
        
          <img className="my-img" src={SaleOff} />
          
        
        <Carousel className="my-carousel">
          <Carousel.Item>
            <img
              className="d-block my-wall"
              src={BookeBanner}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block my-wall"
              src={BookeBanner}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block my-wall"
              src={BookeBanner}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
