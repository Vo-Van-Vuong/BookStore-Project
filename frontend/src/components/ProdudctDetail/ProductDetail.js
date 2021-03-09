import React, { Component } from "react";
import { Button } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import StarRatings from "react-star-ratings";

export default class ProductDetail extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8">
            <Card>
              <Card.Body>
                <div className="row">
                  <div className="col-md-5">
                    <img
                      style={{ width: "100%" }}
                      src="/images/products/201912-the-return-thumbnail.png"
                    />
                  </div>
                  <div className="col-md-7">
                    <h3 style={{ color: "#212529" }}>The Return</h3>
                    <h6>Tác giả: Nicholas Sparks</h6>
                    <hr></hr>
                    <h6>Đánh giá: 2/5</h6>
                    <StarRatings
                      rating={2}
                      starDimension="20px"
                      starSpacing="1px"
                      starRatedColor="#FED221"
                    />
                    <h6 className="mt-3">Mô tả sách: </h6>
                    <p>
                      Independent Nora's life has been going from bad to worse.
                      Then at the stroke of midnight on her last day on earth
                      she finds herself transported to a library. There she is
                      given the chance to undo her regrets and try out each of
                      the other lives she might have lived. Which raises the
                      ultimate question: with infinite choices, what is the best
                      way to live?
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{height:"392px"}}>
              <Card.Header className="card-header">
                <h6 style={{ fontSize: "20px" }}>Thông tin thêm</h6>
              </Card.Header>
              <Card.Body>
                <div style={{display:"inline"}}><h6 className="addition-info" style={{display:"inline"}}>ISBN: </h6> <p>1786892731</p> </div>
                <h6 className="addition-info" style={{display:"inline"}}>Ngày xuất bản: </h6> <p style={{display:"inline"}}>20/11/2199</p>
                <h6 className="addition-info" style={{display:"inline"}}>Nhà xuất bản: </h6> <p style={{display:"inline"}}>nhà xuất bản</p>
                <h6 className="addition-info" style={{display:"inline"}}>Số trang: </h6> <p style={{display:"inline"}}>200 trang</p>
                <h6 className="addition-info" style={{display:"inline"}}>Kích thước: </h6> <p >129 x 198 x 17mm | 224g</p>
                <Button style={{width:"100%"}} variant="primary"> Mua sách này</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <Card style={{marginTop:"10px"}}>
        <Card.Header>
            <h5>Sách tương tự</h5>
        </Card.Header>
            <Card.Body></Card.Body>
        </Card>

      </div>
    );
  }
}
