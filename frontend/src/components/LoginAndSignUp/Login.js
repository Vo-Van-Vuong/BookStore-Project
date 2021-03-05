import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default class Login extends Component {
  render() {
    return (
      <div style={{marginTop:"15px"}}>
        <Card>
          <Card.Header className="card-header">
            <h5>
              {" "}
              <i className="fa fa-user-circle mr-2"></i>Đăng nhập
            </h5>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Địa chỉ Email</Form.Label>
                <Form.Control type="email" placeholder="email..." />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control type="password" placeholder="password..." />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Nhớ mật khẩu" />  
              </Form.Group>
              <Form.Group>
                <Button style={{float:"right"}} variant="primary" type="submit">
                  Đăng nhập
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        <Card style={{marginTop:"15px"}}>
          <Card.Header className="card-header">
            <h5>
              {" "}
              <i className="fa fa-unlock-alt mr-2"></i>Quên mật khẩu
            </h5>
          </Card.Header>
          <Card.Body>
          <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Địa chỉ Email</Form.Label>
                <Form.Control type="email" placeholder="email..." />
              </Form.Group>

              
              
              
              <Form.Group>
                <Button style={{float:"right", width:"100px"}} variant="primary" type="submit">
                  Gửi
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
