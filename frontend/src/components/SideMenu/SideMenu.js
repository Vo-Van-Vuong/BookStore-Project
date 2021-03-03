import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import "./SideMenu.css";

export default class SideMenu extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header className="card-header">
            <h6>Tìm kiếm với bộ lọc</h6>
          </Card.Header>

          <Card.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Từ khóa</Form.Label>
                <Form.Control type="text" placeholder="..." />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Nhà xuất bản</Form.Label>
                <Form.Control as="select">
                  <option selected>Tất cả</option>
                  <option>NXB Kim đồng</option>
                  <option>NXB Hà Nội</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Thể loại</Form.Label>
                <Form.Control as="select">
                  <option selected>Tất cả</option>
                  <option>Trinh thám</option>
                  <option>Tình cảm</option>
                  <option>Tiểu thuyết</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Mức giá</Form.Label>
                <Form.Control as="select">
                  <option selected>Tất cả</option>
                  <option>Dưới 100.000</option>
                  <option>Từ 100.000 đến 200.000</option>
                  <option>Trên 200.000</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit">
                Lọc sách
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <Card style={{marginTop:"10px"}}>
          <Card.Header className="card-header">
            <h6>Sách theo thể loại</h6>
          </Card.Header>

          <ListGroup variant="flush">
            <ListGroup.Item className="items">Tình cảm</ListGroup.Item>
            <ListGroup.Item className="items">Trinh thám</ListGroup.Item>
            <ListGroup.Item className="items">Tiểu thuyết</ListGroup.Item>
            <ListGroup.Item className="items">Khoa học</ListGroup.Item>
            <ListGroup.Item className="items">Hài hước</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}
