import React, { Component } from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import "./TopBanner.css";

export default class TopBanner extends Component {
  render() {
    return (
      <div className="top-banner">
        <DropdownButton
          className="my-drop"
          variant="info"
          id="dropdown-item-button"
          title="Phân loại sách"
        >
          <Dropdown.Item as="button">Action</Dropdown.Item>
          <Dropdown.Item as="button">Another action</Dropdown.Item>
          <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          className="my-drop"
          variant="info"
          id="dropdown-item-button"
          title="Nhà xuất bản"
        >
          <Dropdown.Item as="button">Action</Dropdown.Item>
          <Dropdown.Item as="button">Another action</Dropdown.Item>
          <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>

        <Button className="my-button" variant="info">
          Sách bán chạy nhất
        </Button>
        <Button className="my-button" variant="info">
          Sách mới nhập
        </Button>
        
        <Button className="my-button" variant="info">
          Danh sách tác giả
        </Button>

        <div className="my-cart">
          
          <Button variant="danger">
          <Badge className="mr-1" variant="light">
            $ 9.000
          </Badge> | 
            <i
              style={{ marginRight: "5px" }}
              className="fa fa-shopping-cart ml-1"
            ></i>
            <Badge variant="light">9</Badge>
            <span className="sr-only">number</span>
          </Button>
        </div>
      </div>
    );
  }
}
