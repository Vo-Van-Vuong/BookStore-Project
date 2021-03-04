import React, { Component } from 'react'

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Login from "../components/LoginAndSignUp/Login";
import SignUp from "../components/LoginAndSignUp/SignUp";

export default class LoginPage extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="row">
                    <div className="col-md-5 col-sm-12">
                        <Login />
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <SignUp />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
