import React, { Component } from "react";
import AddForm from "../../components/AddProductForm/AddForm";
import SideBar from "../../components/SideBar/SideBar";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: String,
      author: String,
      price: Number,
      image: String,
      rating: Number,
    };
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    return (
      <div style={{margin: "100px"}}>
        <AddForm />
      </div>
    );
  }
}
