import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProdcutList from "../components/ProductList/PodcutList";
import Banner from "../components/Banner/Banner";
import TopBanner from "../components/Banner/TopBanner";
import CategoryCard from "../components/CategoryCard/CategoryCard";

import Letter from '../public/images/newsletter-icon.svg'
import "../App.css";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ padding: "10px" }}>
          <TopBanner />
          <Banner />
          <ProdcutList />
          <CategoryCard />
        </div>
        <div className="feed-back">
          <Card>
            <Card.Body>
              <Form method="post">
                <Form.Row>
                  <Col md={1}>
                    <img src={Letter} />
                  </Col>
                  <Col md={3}>
                    <h6>Hãy để lại góp ý cho chúng tôi. Những góp ý của các bạn sẽ góp phần nâng cao chất lượng phục vụ của chúng tôi.</h6>
                  </Col>
                  <Col md={7}>
                    <Form.Control name="message" style={{height:"100%"}} as="textarea" placeholder="Góp ý của bạn..." />
                  </Col>
                  <Col md={1}>
                    <Button style={{width:"100%",height:"100%"}} type="submit">Gửi</Button>
                  </Col>
                </Form.Row>
              </Form>
            </Card.Body>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }
}
