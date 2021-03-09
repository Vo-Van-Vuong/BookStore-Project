import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import Badge from "react-bootstrap/Badge";


import "./ProductGrid.css";
export default class ProdcutGrid extends Component {
  render() {
    return (
      <div>
        <Card className="card-container">
          <Card.Header className="card-header">
            <h4><Badge className="mr-2" variant="danger">HOT !!!</Badge>Sách bán chạy</h4>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Card className="product-card">
                <Card.Img className="card-img" variant="top" src="/images/products/october-2020-books-leave-the-world-behind.jpg" />
                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>
                    Leave the world behind
                    <p style={{ fontWeight: 100 }}>Rumaan Alam </p>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px" }}>$100.99</Card.Text>
                  <Button style={{ margin: "auto" }} variant="outline-danger">
                    Thêm vào giỏ
                  </Button>
                </Card.Body>
              </Card>

              <Card className="product-card">
                <Card.Img className="card-img" variant="top" src="/images/products/october-2020-books-leave-the-world-behind.jpg" />
                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>
                    Leave the world behind
                    <p style={{ fontWeight: 100 }}>Rumaan Alam </p>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px" }}>$100.99</Card.Text>
                  <Button style={{ margin: "auto" }} variant="outline-danger">
                    Thêm vào giỏ
                  </Button>
                </Card.Body>
              </Card>
              <Card className="product-card">
                <Card.Img className="card-img" variant="top" src="/images/products/october-2020-books-leave-the-world-behind.jpg" />
                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>
                    Leave the world behind
                    <p style={{ fontWeight: 100 }}>Rumaan Alam </p>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px" }}>$100.99</Card.Text>
                  <Button style={{ margin: "auto" }} variant="outline-danger">
                    Thêm vào giỏ
                  </Button>
                </Card.Body>
              </Card>
              <Card className="product-card">
                <Card.Img className="card-img" variant="top" src="/images/products/october-2020-books-leave-the-world-behind.jpg" />
                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>
                    Leave the world behind
                    <p style={{ fontWeight: 100 }}>Rumaan Alam </p>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px" }}>$100.99</Card.Text>
                  <Button style={{ margin: "auto" }} variant="outline-danger">
                    Thêm vào giỏ
                  </Button>
                </Card.Body>
              </Card>

              <Card className="product-card">
                <Card.Img className="card-img" variant="top" src="/images/products/october-2020-books-leave-the-world-behind.jpg" />
                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>
                    Leave the world behind
                    <p style={{ fontWeight: 100 }}>Rumaan Alam </p>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px" }}>$100.99</Card.Text>
                  <Button style={{ margin: "auto" }} variant="outline-danger">
                    Thêm vào giỏ
                  </Button>
                </Card.Body>
              </Card>

              <Card className="product-card">
                <Card.Img className="card-img" variant="top" src="/images/products/october-2020-books-leave-the-world-behind.jpg" />
                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>
                    Leave the world behind
                    <p style={{ fontWeight: 100 }}>Rumaan Alam </p>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px" }}>$100.99</Card.Text>
                  <Button style={{ margin: "auto" }} variant="outline-danger">
                    Thêm vào giỏ
                  </Button>
                </Card.Body>
              </Card>
              <Card className="product-card">
                <Card.Img className="card-img" variant="top" src="/images/products/october-2020-books-leave-the-world-behind.jpg" />
                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>
                    Leave the world behind
                    <p style={{ fontWeight: 100 }}>Rumaan Alam </p>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px" }}>$100.99</Card.Text>
                  <Button style={{ margin: "auto" }} variant="outline-danger">
                    Thêm vào giỏ
                  </Button>
                </Card.Body>
              </Card>
              <Card className="product-card">
                <Card.Img className="card-img" variant="top" src="/images/products/october-2020-books-leave-the-world-behind.jpg" />
                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>
                    Leave the world behind
                    <p style={{ fontWeight: 100 }}>Rumaan Alam </p>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px" }}>$100.99</Card.Text>
                  <Button style={{ margin: "auto" }} variant="outline-danger">
                    Thêm vào giỏ
                  </Button>
                </Card.Body>
              </Card>
            </Card.Text>
            <div style={{float:"right", marginTop:"5px"}}>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item >{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item disabled>{6}</Pagination.Item>
                <Pagination.Item>{7}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
