import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> Mục tiêu của chúng tôi</span> Ut congue augue non tellus bibendum,
            in varius tellus condimentum. In scelerisque nibh tortor, sed
            rhoncus odio condimentum in. Sed sed est ut sapien ultrices
            eleifend. Integer tellus est, vehicula eu lectus tincidunt,
            ultricies feugiat leo. Suspendisse tellus elit, pharetra in
            hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante
            sed, viverra massa.
          </p>
          <div className="icons">
            <a href="">
              <i className="fa fa-facebook" />
            </a>
            <a href="">
              <i className="fa fa-twitter" />
            </a>
            <a href="">
              <i className="fa fa-linkedin" />
            </a>
            <a href="">
              <i className="fa fa-google-plus" />
            </a>
            <a href="">
              <i className="fa fa-instagram" />
            </a>
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker" />
            <p>
              <span> 123 Nguyễn Hữu Thọ</span> Hồ Chí Minh, Việt Nam
            </p>
          </div>
          <div>
            <i className="fa fa-phone" />
            <p> (+84) 355 891 555</p>
          </div>
          <div>
            <i className="fa fa-envelope" />
            <p>
              <a href=""> bookstore@company.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h1 style={{ display: "inline" }}>
            <i className="fa fa-book mr-2"></i>Book
          </h1>
          <h4 style={{ display: "inline", color: "white" }}>store</h4>

          <p className="menu">
            <a href=""> Trang chủ</a> |<a href=""> Về chúng tôi</a> |
            <a href=""> Thể loại</a> |<a href=""> Nhà xuất bản</a> |
            <a href=""> Tác giả</a> |<a href=""> Liên hệ</a>
          </p>
          <p className="name"> Book store © 2021</p>
        </div>
      </footer>
    );
  }
}
