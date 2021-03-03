import React, { Component } from "react";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import ProdcutList from '../components/ProductList/PodcutList';
import Banner from '../components/Banner/Banner';
import TopBanner from '../components/Banner/TopBanner';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ padding: "10px" }}>
          <TopBanner />
          <Banner />
          <ProdcutList />
        </div>
        <Footer />
      </div>
    );
  }
}
