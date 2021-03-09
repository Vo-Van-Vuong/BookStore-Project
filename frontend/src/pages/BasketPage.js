import React, { Component } from 'react'

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import TopBanner from "../components/Banner/TopBanner";
import Basket from "../components/Basket/Basket";

import "../App.css";

export default class BasketPage extends Component {
    render() {
        return (
            <div className="App">
        <Header />
        <div style={{ padding: "10px" }}>
          <Basket />
        </div>
        <Footer />
      </div>
        )
    }
}
