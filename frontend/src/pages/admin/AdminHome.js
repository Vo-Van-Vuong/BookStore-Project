import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import ProductApi from "../../API/ProductApi";

export default class AdminHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
        "title": String,
        "author": String,
        "price": Number,
        "image": String,
        "rating": Number
      
    };
  }



  handleSubmit(){
    console.log(this.state)
  }

  render() {
    return (
      <div style={{margin: "100px"}}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control  name="title" type="text" placeholder="title" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Author</Form.Label>
            <Form.Control  name="author" type="text" placeholder="author" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control name="price" type="text" placeholder="price" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <Form.Control name="rating" type="text" placeholder="rating" />
          </Form.Group>

          <Form.Group>
            <Form.File id="exampleFormControlFile1" name="image" label="Image" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
