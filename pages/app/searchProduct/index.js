import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { searchProductProcess } from "../../../src/config/redux/actions/product";
import CardProduct from "../../../src/component/base/cardProduct";
import Rupiah from "../../../src/helper/rupiah";

function index() {
  const dispatch = useDispatch();
  const { searchProduct } = useSelector((state) => state.product);
  const [dataResult, setDataResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchProduct !== "") {
      setLoading(true);
      dispatch(searchProductProcess({ name: searchProduct }))
        .then((res) => {
          setDataResult(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setDataResult([]);
          setLoading(false);
        });
    }
  }, [searchProduct]);

  return (
    <div className="h-100">
      <div className="container ">
        <div className="row mt-7 mb-5 ">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/app">
                  <a>Home</a>
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/app/searchProduct">
                  <a>Search Product</a>
                </Link>
              </li>
            </ol>
          </nav>

          {loading ? (
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ minHeight: "50vh" }}
            >
              <div
                className="spinner-grow bg-danger"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <h3 className="fw-bold">Wait a moment..</h3>
            </div>
          ) : dataResult.length < 1 ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "50vh" }}
            >
              <h1 className="fw-bold text-danger">Oops data not found..</h1>
            </div>
          ) : (
            <div className="row">
              {dataResult.map((item, index) => {
                return (
                  <CardProduct
                    key={item.id}
                    image={item.image[0]}
                    titleProduct={item.name}
                    price={Rupiah(`Rp.${item.price}`)}
                    linkDetailProduct={`/app/product/${item.id}`}
                    seller={item.sellerName}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default index;
