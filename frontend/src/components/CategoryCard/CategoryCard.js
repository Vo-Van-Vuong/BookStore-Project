import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Carousel from "react-multi-carousel";

import StudyingBook from "../../public/images/studying-book.jpg";
import LanguageBook from "../../public/images/language-learning-books.jpg";

import "react-multi-carousel/lib/styles.css";
import "./CategoryCard.css";

export default class CategoryCard extends Component {
  responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 1020 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1020, min: 0 },
      items: 2,
    },
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Card style={{height:"405px"}} className="new-card category-card">
              <Card.Header className="card-header">
                <h4>
                  <Badge variant="success">Học tập</Badge>
                </h4>
              </Card.Header>
              <Card.Body style={{marginTop:"20px"}}>
                <div className="row">
                  <div className="col-md-6">
                    <Card className="sub-card">
                      <Card.Img
                        className="sub-card-img"
                        variant="top"
                        src={StudyingBook}
                      />
                      <Card.Body>
                        <Card.Subtitle>Sách học tốt</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-6">
                    <Card className="sub-card">
                      <Card.Img
                        className="sub-card-img"
                        variant="top"
                        src={LanguageBook}
                      />
                      <Card.Body>
                        <Card.Subtitle>Sách học ngoại ngữ</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          {/* 
          <div className="col-md-6">
            <Card className="new-card category-card">
              <Card.Header className="card-header">
                <h4>
                  <Badge variant="warning">Giải trí</Badge>
                </h4>
              </Card.Header>
              <Card.Body>
                <div className="row">
                  <div className="col-md-4">
                  <Card className="sub-card">
                      <Card.Img className="sub-card-img" variant="top" src={StudyingBook} />
                      <Card.Body>
                        <Card.Subtitle>Sách học tốt</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-4">
                  <Card className="sub-card">
                      <Card.Img className="sub-card-img" variant="top" src={StudyingBook} />
                      <Card.Body>
                        <Card.Subtitle>Sách học tốt</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="col-md-4">
                  <Card className="sub-card">
                      <Card.Img className="sub-card-img" variant="top" src={StudyingBook} />
                      <Card.Body>
                        <Card.Subtitle>Sách học tốt</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>*/}
          
          <div className="col-md-6">
            <Card className="new-card category-card">
              <Card.Header className="card-header">
                <h4>
                  <Badge variant="warning">Giải trí</Badge>
                </h4>
              </Card.Header>
              <Card.Body>
                <Carousel
                  className="categoty-carousel"
                  slidesToSlide={2}
                  responsive={this.responsive}
                >
                  <Card className="carousel-card">
                    <Card.Img
                      className="sub-card-img"
                      variant="top"
                      src={StudyingBook}
                    />
                    <Card.Body>
                      <Card.Subtitle>Truyện tranh</Card.Subtitle>
                    </Card.Body>
                  </Card>

                  <Card className="carousel-card">
                    <Card.Img
                      className="sub-card-img"
                      variant="top"
                      src={StudyingBook}
                    />
                    <Card.Body>
                      <Card.Subtitle>Khoa học</Card.Subtitle>
                    </Card.Body>
                  </Card>

                  <Card className="carousel-card">
                    <Card.Img
                      className="sub-card-img"
                      variant="top"
                      src={StudyingBook}
                    />
                    <Card.Body>
                      <Card.Subtitle>Tiểu thuyết</Card.Subtitle>
                    </Card.Body>
                  </Card>

                  <Card className="carousel-card">
                    <Card.Img
                      className="sub-card-img"
                      variant="top"
                      src={StudyingBook}
                    />
                    <Card.Body>
                      <Card.Subtitle>Trinh thám</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Carousel>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
