import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Navbar } from "../../../src/component/module";
function index() {
  const { total } = useSelector((state) => state.myBag);
  const [dataMyBag, setDataMyBag] = useState([
    {
      id: 1,
      name: `Men's formal suit - Black`,
      brand: `Zalora Cloth`,
      price: `20000`,
    },
    {
      id: 2,
      name: `Men's formal suit - Black`,
      brand: `Zalora Cloth`,
      price: `30000`,
    },
  ]);

  const [dataTotal, setDataTotal] = useState([]);

  // const dispatch = useDispatch();
  // let [quantity, setQuantity] = useState(1);
  // // let [Price, setPrice] = useState(price);
  // // let [subTotal, setSubTotal] = useState(price);

  // const handleAdd = (itm) => {
  //   dataMyBag.forEach((e) => {
  //     if (e.id === itm.id) {
  //       setQuantity(quantity + 1);
  //       setActiveBtn(true);
  //     }
  //   });

  //   // console.log(itm);
  // };

  // const handleRemove = (itm) => {
  //   quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
  //   setActiveBtn(false);
  //   console.log(itm);
  // };

  // useEffect(() => {
  //   dispatch({ type: "ADD_TOTAL", payload: subTotal });
  // }, [quantity, Price, subTotal, dispatch]);

  // useEffect(() => {
  //   setSubTotal(Price * quantity);
  // }, [quantity, dispatch, Price]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-7 mb-5">
          <h2 className="mt-3 fw-bold mb-4">My bag</h2>
          <div className="col-lg-8">
            {/* Selecet items */}
            <div className="card card-shadow border-0  mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    className="form-check-input bg-danger border-0 rounded-0"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <span className="fw-bold ms-3 me-auto me-md-0">
                    Select all items
                  </span>
                  <span className="text-muted ms-1 me-auto d-none d-md-block">
                    (2 items selected)
                  </span>
                  <button className="btn text-danger fw-bold">Delete</button>
                </div>
              </div>
            </div>
            {/* end selecet items */}

            {/* Belum fix susah  handle data
            <Listbag
              titleProduct={`Men's formal suit - Black`}
              seller={`Zalora Cloth`}
              price={`20000`}
            /> */}
            {dataMyBag.map((itm, idx) => {
              let [quantity, setQuantity] = useState(0);
              const [activeBtn, setActiveBtn] = useState(false);

              const handleAdd = (itm) => {
                setQuantity(quantity + 1);
                setActiveBtn(true);

                let data = {
                  id: itm.id,
                  product: itm.name,
                  price: itm.price,
                  qty: 0,
                };

                const findOrder = _.find(dataTotal, (item) => {
                  if (item.id === data.id) {
                    return item;
                  }
                });

                if (findOrder === undefined) {
                  setDataTotal((prevState) => {
                    return [...prevState, data];
                  });
                } else {
                  {
                    /* const index = _.findIndex(dataTotal, { id: data.id });
                  let newData = {
                    id: dataTotal[index].id,
                    product: dataTotal[index].product,
                    price: dataTotal[index].price,
                    qty: dataTotal[index].qty + 1,
                  };
                  const newOrder = _.remove(dataTotal, (item) => {
                    return item.id !== data.id;
                  });
                  newOrder.push(newData);
                  setDataTotal(newOrder);
                  console.log(dataTotal); */
                  }
                }
              };

              const handleRemove = (itm) => {
                quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
                setActiveBtn(false);
                console.log(itm);
              };

              return (
                <div className="card card-shadow border-0 mb-3" key={idx}>
                  <div className="card-body">
                    <div className="d-sm-block d-md-flex justify-content-between align-items-center">
                      <input
                        className="d-sm-inline-block form-check-input bg-danger border-0 rounded-0"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <div className="d-none d-md-flex border-image ms-3">
                        <img
                          alt="item"
                          src={require("../../../public/img/jas.png")}
                          className="border-image"
                        />
                      </div>
                      <div className="d-inline-block d-md-flex ms-3  me-auto">
                        <div className=" d-flex flex-column ">
                          <span className="fw-bold">{itm.name}</span>
                          <span className="text-muted">{itm.brand}</span>
                        </div>
                      </div>
                      <div className="d-block d-md-none bg-danger py-2 rounded  text-center mt-2">
                        <img
                          alt="item"
                          src={require("../../../public/img/jas.png")}
                          className="border-image"
                        />
                      </div>
                      <div
                        className="d-inline-block mt-3  mt-sm-3 mt-md-0 ms-0 ms-sm-5 ms-md-0 float-start text-center"
                        style={{ width: "180px" }}
                      >
                        <button
                          className={`btn btn-grup radius-50  ${
                            activeBtn ? "" : "btn-active"
                          }`}
                          onClick={(e) => handleRemove(itm)}
                        >
                          <span className="material-icons f-14 ">remove</span>
                        </button>
                        <p
                          className="d-inline-block mx-3 "
                          style={{ width: "40px" }}
                        >
                          {dataTotal.qty ? dataTotal[0].qty : "0"}
                        </p>
                        <button
                          className={`btn btn-grup radius-50 text-center  ${
                            activeBtn ? "btn-active" : ""
                          }`}
                          onClick={(e) => handleAdd(itm)}
                        >
                          <span className="material-icons f-14 fw-bold">
                            add
                          </span>
                        </button>
                      </div>
                      <div
                        className="d-inline-block mt-3  mt-sm-3 mt-md-0 me-0 me-sm-5 me-md-0  ms-md-5 fw-bold f-18 float-end"
                        style={{ width: "120px" }}
                      >
                        Rp {itm.price * quantity}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-12 col-md-12 col-lg-4 ">
            {/* shopping summarry */}
            <div className="card card-shadow border-0">
              <div className="card-body">
                <p className="fw-bold">Shopping summary</p>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Total price</span>
                  <span className="fw-bold f-18">Rp {total}</span>
                </div>
                <div className="row justify-content-center">
                  <div className="col-sm-12 col-md-8 col-lg-12">
                    <button className="mt-3 btn w-100 bg-danger round text-white  ">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*end  shopping summarry */}
          </div>
        </div>
      </div>
      <style jsx>{`
        .f-14 {
          font-size: 14px;
        }
        .f-16 {
          font-size: 16px;
        }
        .f-18 {
          font-size: 18px;
        }
        .round {
          border-radius: 25px !important;
        }
        .card-shadow {
          box-shadow: 0px 0px 8px rgba(115, 115, 115, 0.25);
          border-radius: 4px;
        }
        .border-image {
          border-radius: 8px !important;
          width: 69px;
          height: 69px;
          object-fit: cover;
        }
        .radius-50 {
          border-radius: 50%;
        }
        .btn-grup {
          width: 40px !important;
          height: 40px !important;
        }
        .btn-active {
          background: #d5d5d5;
          color: white;
        }

        @media (max-width: 768px) {
          .border-image {
            border-radius: 8px !important;
            width: 120px;
            height: 120px;
            object-fit: cover;
          }
        }
      `}</style>
    </div>
  );
}

export default index;
