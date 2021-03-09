import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import StarRatings from "react-star-ratings";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./Basket.css";
import { Button } from "react-bootstrap";

export default class Basket extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header className="card-header">
            <h5>
              <i className="fa fa-shopping-basket mr-2"></i>
              Giỏ hàng của bạn
            </h5>
          </Card.Header>

          <Card.Body>

            <Card.Subtitle style={{ fontSize: "18px", marginBottom: "15px" }}>
              <i className="fa fa-info-circle mr-2"></i>
              Bạn có <p style={{display:"inline", color:"#007ACC"}}>2</p> sản phẩm trong giỏ hàng. Tổng trị giá là <p style={{display:"inline", color:"#007ACC"}}>305.000 VNĐ</p>.
            </Card.Subtitle>
            <hr></hr>

            <Card style={{marginBottom:"10px"}}>
              <Card.Body>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      className="basket-img"
                      src="/images/products/october-2020-books-leave-the-world-behind.jpg"
                    />
                  </div>
                  <div style={{ textAlign: "left" }} className="col-md-8">
                    <h5>Leave the world behind</h5>
                    <h6>Rumaan Alam</h6>
                    <hr></hr>
                    <StarRatings
                      rating={4}
                      starDimension="20px"
                      starSpacing="1px"
                      starRatedColor="#FED221"
                    />
                    <h5 style={{ color: "#FF0072", marginTop: "10px" }}>
                      100.000 VNĐ
                    </h5>
                  </div>
                  <div className="col-md-2">
                    <Form style={{ marginTop: "30px" }}>
                      <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="6">
                          Số lượng
                        </Form.Label>
                        <Col sm="6">
                          <Form.Control
                            type="number"
                            min="1"
                            max="999"
                            defaultValue="1"
                          />
                        </Col>
                      </Form.Group>
                    </Form>
                    <Button
                      style={{
                        float: "right",
                        marginTop: "40px",
                        width: "100%",
                      }}
                      variant="danger"
                    >
                      Xóa
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card style={{marginBottom:"10px"}}>
              <Card.Body>
                <div className="row">
                  <div className="col-md-2">
                    <img
                      className="basket-img"
                      src="/images/products/201912-the-return-thumbnail.png"
                    />
                  </div>
                  <div style={{ textAlign: "left" }} className="col-md-8">
                    <h5>The Return</h5>
                    <h6>Nicholas Sparks</h6>
                    <hr></hr>
                    <StarRatings
                      rating={2}
                      starDimension="20px"
                      starSpacing="1px"
                      starRatedColor="#FED221"
                    />
                    <h5 style={{ color: "#FF0072", marginTop: "10px" }}>
                      205.000 VNĐ
                    </h5>
                  </div>
                  <div className="col-md-2">
                    <Form style={{ marginTop: "30px" }}>
                      <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="6">
                          Số lượng
                        </Form.Label>
                        <Col sm="6">
                          <Form.Control
                            type="number"
                            min="1"
                            max="999"
                            defaultValue="1"
                          />
                        </Col>
                      </Form.Group>
                    </Form>
                    <Button
                      style={{
                        float: "right",
                        marginTop: "40px",
                        width: "100%",
                      }}
                      variant="danger"
                    >
                      Xóa
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            

            <Button style={{width:"192px", float:"right"}} variant="primary"> Thanh toán </Button>
            <Button style={{width:"192px", float:"right", marginRight:"10px"}} variant="secondary"> Tiếp tục mua sắm </Button>
            
        

          </Card.Body>
          
        </Card>
      </div>
    );
  }
}
