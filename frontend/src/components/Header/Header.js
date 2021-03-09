import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import "./Header.css";

export default class Header extends Component {
  url = "";
  render() {
    return (
      <>
        <Navbar className="my-navbar" bg="light" expand="lg">
          <Navbar.Brand  href="">
          <h1 style={{display:"inline"}}><i className="fa fa-book mr-2"></i>Book</h1>
          <h4 style={{display:"inline", color:"white"}}>store</h4>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey="/home" className="mr-auto">
              <Nav.Link  className="links" href="/home">
                Trang chủ
              </Nav.Link>
              <Nav.Link className="links" href="">
                Liên hệ
              </Nav.Link>
              <Nav.Link className="links ml-7" href="/login">
              <i className="fa fa-user mr-1"></i>Đăng nhập/đăng ký
              </Nav.Link>
              
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Tìm sách ở đây..."
                className="mr-sm-2"
              />
              <Button variant="success"> <i className="fa fa-search mr-1"></i>Tìm kiếm</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
