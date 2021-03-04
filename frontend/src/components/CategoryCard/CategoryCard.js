import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import "./CategoryCard.css";
export default class CategoryCard extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Card className="new-card category-card">
              <Card.Header className="card-header">
                <h4>
                  <Badge variant="success">Giải trí</Badge>
                </h4>
              </Card.Header>
              <Card.Body>
                <div className="row"></div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card className="new-card category-card">
              <Card.Header className="card-header">
                <h4>
                  <Badge variant="warning">Học tập</Badge>
                </h4>
              </Card.Header>
              <Card.Body>
                <div className="row"></div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
