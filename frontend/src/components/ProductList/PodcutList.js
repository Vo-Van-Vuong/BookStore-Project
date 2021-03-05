import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Carousel from "react-multi-carousel";
import StarRatings from "react-star-ratings";
import Button from "react-bootstrap/Button";

import "react-multi-carousel/lib/styles.css";
import "./ProductList.css";
import Book from "../../public/images/products/october-2020-books-leave-the-world-behind.jpg";
import Book1 from "../../public/images/products/book-of-knowledge.jpg";
import Book2 from "../../public/images/products/Joy_of_Intimacy.jpg";
import Book3 from "../../public/images/products/201912-the-return-thumbnail.png";

export default class PodcutList extends Component {
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
      breakpoint: { max: 1024, min: 1020 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 1020, min: 0 },
      items: 2,
    },
  };

  render() {
    return (
      <div className="product-grid">
        <Card className="new-card">
          <Card.Header className="card-header">
            <h4>
              <Badge variant="warning">NEW !!!</Badge> Sách mới mỗi ngày
            </h4>
          </Card.Header>
          <Card.Body>
            <Carousel
              infinite={true}
              slidesToSlide={2}
              responsive={this.responsive}
            >
              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src={Book} />
                <Card.Body>
                  <Card.Title>Leave the world behind</Card.Title>
                  
                  <Card.Subtitle className="mb-2">Author</Card.Subtitle>
                  <Card.Text>
                    <StarRatings 
                      rating={4}
                      starDimension="25px"
                      starSpacing="2px"
                      starRatedColor="#FED221"
                    />
                    <h6 className="mt-1">100.000 VND</h6>
                    <Button style={{ float:"right", width:"100%" }} variant="outline-danger">
                      Mua ngay
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src={Book} />
                <Card.Body>
                  <Card.Title>Leave the world behind</Card.Title>
                  <Card.Text>
                    <StarRatings
                      rating={3.5}
                      starDimension="25px"
                      starSpacing="2px"
                      starRatedColor="#FED221"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src={Book} />
                <Card.Body>
                  <Card.Title>Leave the world behind</Card.Title>
                  <Card.Text>
                    <StarRatings
                      rating={4.4}
                      starDimension="25px"
                      starSpacing="2px"
                      starRatedColor="#FED221"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src={Book1} />
                <Card.Body>
                  <Card.Title>The Book of knowledge</Card.Title>
                  <Card.Text>
                    <StarRatings
                      rating={2.6}
                      starDimension="25px"
                      starSpacing="2px"
                      starRatedColor="#FED221"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src={Book2} />
                <Card.Body>
                  <Card.Title>The JOY of Intimacy</Card.Title>
                  <Card.Text>
                    <StarRatings
                      rating={3}
                      starDimension="25px"
                      starSpacing="2px"
                      starRatedColor="#FED221"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src={Book3} />
                <Card.Body>
                  <Card.Title>The Return</Card.Title>
                  <Card.Text>
                    <StarRatings
                      rating={3}
                      starDimension="25px"
                      starSpacing="2px"
                      starRatedColor="#FED221"
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel>
          </Card.Body>
        </Card>

        <Card className="hot-card">
          <Card.Header className="card-header">
            {/* <img className="new-logo" src={Hot} /> */}
            <h4 style={{}}>
              <Badge variant="danger">HOT !!!</Badge> Sách bán chạy nhất
            </h4>
          </Card.Header>
          <Card.Body>
            <Carousel
              infinite={true}
              slidesToSlide={2}
              responsive={this.responsive}
            >
              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src={Book} />
                <Card.Body>
                  <Card.Title>Leave the world behind</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src={Book} />
                <Card.Body>
                  <Card.Title>Leave the world behind</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src={Book} />
                <Card.Body>
                  <Card.Title>Leave the world behind</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src={Book1} />
                <Card.Body>
                  <Card.Title>The Book of knowledge</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src={Book2} />
                <Card.Body>
                  <Card.Title>The JOY of Intimacy</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src={Book3} />
                <Card.Body>
                  <Card.Title>The Return</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
