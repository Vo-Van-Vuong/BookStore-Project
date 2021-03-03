import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProductList.css";
import Book from "../../public/images/products/october-2020-books-leave-the-world-behind.jpg";
import Book1 from "../../public/images/products/book-of-knowledge.jpg";
import Book2 from "../../public/images/products/Joy_of_Intimacy.jpg";
import Book3 from "../../public/images/products/201912-the-return-thumbnail.png";
import New from "../../public/images/New.png";
import Hot from "../../public/images/hot.jpg";

export default class PodcutList extends Component {


  render() {
    return (
      <div className="product-grid">
        <Card>
          <Card.Header className="card-header">
            <img className="new-logo" src={New} />
            <h4 style={{float: "left", paddingTop: "10px"}}>Sách mới mỗi ngày</h4>
          </Card.Header>
          <Card.Body>

            <Card 
              className="product-card">
              <Card.Img className="card-img" variant="top" src={Book} />
              <Card.Body>
                <Card.Title>Leave the world behind</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card 
              className="product-card">
              <Card.Img className="card-img" variant="top" src={Book1} />
              <Card.Body>
                <Card.Title>The Book of knowledge</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card 
              className="product-card">
              <Card.Img className="card-img" variant="top" src={Book2} />
              <Card.Body>
                <Card.Title>The JOY of Intimacy</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card 
              className="product-card">
              <Card.Img className="card-img" variant="top" src={Book3} />
              <Card.Body>
                <Card.Title>The Return</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            
          </Card.Body>
        </Card>

        <Card className="hot-card">
          <Card.Header className="card-header">
            <img className="new-logo" src={Hot} />
            <h4 style={{float: "left", paddingTop: "15px"}}>Sách bán chạy nhất</h4>
          </Card.Header>
          <Card.Body>

            <Card 
              className="product-card">
              <Card.Img className="card-img" variant="top" src={Book} />
              <Card.Body>
                <Card.Title>Leave the world behind</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card 
              className="product-card">
              <Card.Img className="card-img" variant="top" src={Book1} />
              <Card.Body>
                <Card.Title>The Book of knowledge</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card 
              className="product-card">
              <Card.Img className="card-img" variant="top" src={Book2} />
              <Card.Body>
                <Card.Title>The JOY of Intimacy</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card 
              className="product-card">
              <Card.Img className="card-img" variant="top" src={Book3} />
              <Card.Body>
                <Card.Title>The Return</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            
          </Card.Body>
        </Card>

      </div>
    );
  }
}
