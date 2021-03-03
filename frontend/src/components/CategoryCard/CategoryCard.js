import React, { Component } from "react";
import Card from "react-bootstrap/Card"
import './CategoryCard.css'
export default class CategoryCard extends Component {
  render() {
    return (
      <div className="row row2">
        <Card className="my-card col-md-2 col-5 category-card child" style={{ width: "18rem"}}>
          <Card.Body>
            <Card.Title style={{textAlign:"center"}}></Card.Title>
            
          </Card.Body>
        </Card>
        <Card className="my-card col-md-3 col-5 category-card cook" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title style={{textAlign:"center"}}><h1><i class="fa fa-coffee"></i></h1></Card.Title>
            
            
          </Card.Body>
        </Card>
        <Card className="my-card col-md-2 col-5 category-card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="my-card col-md-4 col-5 manga" style={{ width: "18rem" }}>
          <Card.Body >
            <Card.Title style={{textAlign:"center"}}><i className="fa fa-journal-whills"></i></Card.Title>
            <Card.Text  style={{textAlign:"center", fontWeight:"bold", fontSize:"20px",color:"white", backgroundColor:"blue", opacity:"0.5"}}>
            Truyện tranh
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
