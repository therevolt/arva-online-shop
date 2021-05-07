import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function listBag({ image, titleProduct, price, seller, Key }) {
  const dispatch = useDispatch();
  let [quantity, setQuantity] = useState(1);
  let [Price, setPrice] = useState(price);
  let [subTotal, setSubTotal] = useState(price);
  const [activeBtn, setActiveBtn] = useState(false);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    setActiveBtn(true);
  };

  const handleRemove = () => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
    setActiveBtn(false);
  };

  useEffect(() => {
    dispatch({ type: "ADD_TOTAL", payload: subTotal });
  }, [quantity, Price, subTotal, dispatch]);

  useEffect(() => {
    setSubTotal(Price * quantity);
  }, [quantity, dispatch, Price]);

  return (
    <div className="card card-shadow border-0 mb-3" key={Key}>
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
              <span className="fw-bold">{titleProduct}</span>
              <span className="text-muted">{seller}</span>
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
              onClick={handleRemove}
            >
              <span className="material-icons f-14 ">remove</span>
            </button>
            <p className="d-inline-block mx-3 " style={{ width: "40px" }}>
              {quantity}
            </p>
            <button
              className={`btn btn-grup radius-50 text-center  ${
                activeBtn ? "btn-active" : ""
              }`}
              onClick={handleAdd}
            >
              <span className="material-icons f-14 fw-bold">add</span>
            </button>
          </div>
          <div
            className="d-inline-block mt-3  mt-sm-3 mt-md-0 me-0 me-sm-5 me-md-0  ms-md-5 fw-bold f-18 float-end"
            style={{ width: "120px" }}
          >
            Rp {Price * quantity}
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

export default listBag;
