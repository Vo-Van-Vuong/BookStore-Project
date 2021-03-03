import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Card from "react-bootstrap/Card";
import Book from "../../public/images/products/october-2020-books-leave-the-world-behind.jpg";
import Book1 from "../../public/images/products/book-of-knowledge.jpg";
import Book2 from "../../public/images/products/Joy_of_Intimacy.jpg";
import Book3 from "../../public/images/products/201912-the-return-thumbnail.png";

export default class AdminHome extends Component {
  responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  render() {
    return (
      <div>
        <Carousel responsive={this.responsive}>
          <Card className="product-card1">
            <Card.Img className="card-img1" variant="top" src={Book} />
            <Card.Body>
              <Card.Title>Leave the world behind</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="product-card1">
            <Card.Img className="card-img1" variant="top" src={Book} />
            <Card.Body>
              <Card.Title>Leave the world behind</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="product-card1">
            <Card.Img className="card-img1" variant="top" src={Book} />
            <Card.Body>
              <Card.Title>Leave the world behind</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="product-card1">
            <Card.Img className="card-img1" variant="top" src={Book1} />
            <Card.Body>
              <Card.Title>The Book of knowledge</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="product-card1">
            <Card.Img className="card-img1" variant="top" src={Book2} />
            <Card.Body>
              <Card.Title>The JOY of Intimacy</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="product-card1">
            <Card.Img className="card-img1" variant="top" src={Book3} />
            <Card.Body>
              <Card.Title>The Return</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel>
        ;
      </div>
    );
  }
}
