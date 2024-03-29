import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Carousel from "react-multi-carousel";
import StarRatings from "react-star-ratings";
import Button from "react-bootstrap/Button";

import "react-multi-carousel/lib/styles.css";
import "./ProductList.css";

import ProductApi from "../../API/ProductApi";

import { Link } from "react-router-dom";

export default class PodcutList extends Component {
  responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 1022 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 1022, min: 0 },
      items: 2,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    ProductApi.getBooks().then((response) => {
      console.log(response.data)
      this.setState({ books: response.data });
    });
  }

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
              {this.state.books.map((book) => (
                <Link params={{ id: book.id }} className="my-link" to="/product/id">
                <Card key={book.id} className="product-card1">
                  <Card.Img
                    className="card-img1"
                    variant="top"
                    src={"data:image/jpeg;base64," + book.image}
                  />
                  <Card.Body>
                    <Card.Title style={{ height: "50px" }}>
                      {book.title}
                    </Card.Title>

                    <Card.Subtitle className="mb-2">
                      {book.author}
                    </Card.Subtitle>
                    <Card.Text>
                      <StarRatings
                        rating={book.rating}
                        starDimension="25px"
                        starSpacing="2px"
                        starRatedColor="#FED221"
                      />
                      <h6 className="mt-1">{book.price}</h6>
                      <Button
                        style={{
                          float: "right",
                          width: "100%",
                          position: "relative",
                          bottom: "0px",
                        }}
                        variant="outline-danger"
                      >
                        Mua ngay
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Link>
              ))}
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
                <Card.Img className="card-img1" variant="top" src="/images/products/201912-the-return-thumbnail.png" />
                <Card.Body>
                  <Card.Title>Leave the world behind</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src="/images/products/Joy_of_Intimacy.jpg" />
                <Card.Body>
                  <Card.Title>Leave the world behind</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src="/images/products/october-2020-books-leave-the-world-behind.jpg" />
                <Card.Body>
                  <Card.Title>Leave the world behind</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src="/images/products/book-of-knowledge.jpg" />
                <Card.Body>
                  <Card.Title>The Book of knowledge</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src="/images/products/Joy_of_Intimacy.jpg" />
                <Card.Body>
                  <Card.Title>The JOY of Intimacy</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="product-card1">
                <Card.Img className="card-img1" variant="top" src="/images/products/201912-the-return-thumbnail.png" />
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
