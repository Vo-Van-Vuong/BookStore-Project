import React, { Component } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductDetail from "../components/ProdudctDetail/ProductDetail";

export default class ProductDetailPage extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ padding: "10px" }}>
          <ProductDetail />
        </div>
        <Footer />
      </div>
    );
  }
}
