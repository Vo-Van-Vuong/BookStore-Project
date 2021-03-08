import React, { Component } from "react";

import Header from '../components/Header/Header';
import TopBanner from '../components/Banner/TopBanner';
import Footer from '../components/Footer/Footer';
import SideMenu from '../components/SideMenu/SideMenu';
import ProdcutGrid from "../components/ProductGrid/ProdcutGrid";

export default class BestSellProduct extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={{ padding: "10px" }}>
          <TopBanner />
          <div className="row">

            <div className="col-md-3 col-sm-5 col-5">
              <SideMenu />
            </div>

            <div className="col-md-9 col-sm-7 col-7">
              <ProdcutGrid />
            </div>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
