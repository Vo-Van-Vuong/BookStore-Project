import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class SignUp extends Component {
  render() {
    return (
      <div style={{marginTop:"15px"}}>
        <Card style={{height:"588px"}}>
          <Card.Header className="card-header">
            <h5><i className="fa fa-user-plus mr-2"></i>Đăng ký</h5>
          </Card.Header>
          <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Tên của bạn</Form.Label>
                <Form.Control type="text" placeholder="name..." />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Địa chỉ Email</Form.Label>
                <Form.Control type="email" placeholder="email..." />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="password..." />
              </Form.Group>
              
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Nhập lại mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="retype password..." />
              </Form.Group>

              <Form.Group>
                <Button style={{float:"right"}} variant="success" type="submit">
                  Đăng ký
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
