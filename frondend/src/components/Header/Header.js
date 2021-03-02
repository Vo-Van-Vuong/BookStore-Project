import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import "./Header.css";

export default class Header extends Component {
  url = "";
  render() {
    return (
      <>
        <Navbar className="my-navbar" bg="light" expand="lg">
          <Navbar.Brand href="">
            <h1>BookStore</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="links" href="">
                Home
              </Nav.Link>
              <Nav.Link className="links" href="">
                Link
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
