import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
// import { getNewProduct, getPopularProduct } from "../../src/config/redux/actions/product";
import { CardProduct } from "../../../src/component/base";
function index() {
  return (
    <div>
      <div className="container">
        <div className="row mt-7 mb-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Category</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Data
              </li>
            </ol>
          </nav>
          <h2 className=" mt-3 fw-bold">T-shirt</h2>

          {Array(12)
            .fill()
            .map((item, index) => {
              return (
                <CardProduct
                  Key={index}
                  image="/img/jas.png"
                  titleProduct="Men's formal suit - Black & White"
                  price="$ 40.0"
                  linkDetailProduct=""
                  seller="Zalora Cloth"
                />
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .f-14 {
            font-size: 14px;
          }

          .color-muted {
            color: #9b9b9b;
          }
        `}
      </style>
    </div>
  );
}

export default index;
