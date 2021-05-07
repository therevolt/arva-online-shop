import React from "react";

function Checkout() {
  return (
    <div className="container">
      <div className="row row mt-7 mb-5">
        <h2 className="fw-bold mt-3 mb-4">Checkout</h2>

        {/* left columns */}
        <div className="col-lg-8">
          <h4 className="f-16 fw-bold mb-3">Shipping Adress</h4>
          {/* awal shipping addres */}
          <div className="card custom-card mb-3">
            <div className="card-body ">
              <h5 className="fw-bold f-16">Andreas Jane</h5>
              <p className="color-p f-14 fw-400">
                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c
                16] Sokaraja, Kab. Banyumas, 53181
              </p>
              <button className="btn custom-btn color-gray shadow-none">
                Choose another address
              </button>
            </div>
          </div>
          {/* akhir shipping addres */}

          {/* awal item */}
          <div className="card custom-card mb-3">
            <div className="card-body">
              <div className="d-sm-block d-md-flex align-items-center">
                <div className="text-center border-md">
                  <img
                    src={require("../../../public/img/jas.png")}
                    alt="product"
                    className="border-image"
                  />
                </div>
                <div className="d-md-inline mt-3 mt-md-0  ms-0 ms-md-3 d-md-flex flex-column  align-items-center">
                  <div className=" me-auto f-16 fw-bold">
                    Men's formal suit - Black
                  </div>
                  <div className=" me-auto color-gray f-12 fw-500">
                    Zalora Cloth
                  </div>
                </div>
                <div className="d-md-inline ms-md-auto f-18 fw-bold">$ 20</div>
              </div>
            </div>
          </div>
          {/* akhir item */}
        </div>
        {/* end left columns */}

        {/* right columns */}
        <div className="col-lg-4">
          {/* awal shopping summary */}
          <div className="card custom-card">
            <div className="card-body">
              <h4 className="f-16 fw-bold mb-3">Shopping summary</h4>
              <div className="d-flex justify-content-between">
                <div className="color-gray fw-500 f-16">Order</div>
                <div className="f-18 fw-bold">$ 40</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="color-gray fw-500 f-16">Delivery</div>
                <div className="f-18 fw-bold">$ 5</div>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <div className="f-16 fw-bold mb-3">Shopping summary</div>
                <div className="color-red fw-bold f-18">$ 5</div>
              </div>
              <div className="d-grid gap-2 col-12 mx-auto">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn mx-auto w-100 custom-red-btn shadow-none text-white"
                >
                  Select Payment
                </button>
              </div>
            </div>
          </div>
          {/* akhir shopping summary */}

          {/* awal modal payment */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="d-flex justify-content-start">
                    <button
                      type="button "
                      className="btn-close align-self-center"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                    <h5
                      className="modal-title ms-2 f-22 fw-bold align-self-center"
                      id="exampleModalLabel"
                    >
                      Payment
                    </h5>
                  </div>
                  <hr />
                  <h4 className="f-16 fw-bold mb-3">Payment method</h4>
                  <div className="d-flex justify-content-between mb-4">
                    <div
                      className="align-self-center"
                      style={{ width: "80px" }}
                    >
                      <img
                        src={require("../../../public/img/payment/bri.png")}
                        alt="product"
                        className="ms-1 img-bri"
                      />
                    </div>
                    <div className="fw-bold f-18 align-self-center ms-5 me-auto">
                      Bank BCA
                    </div>
                    <input
                      className="form-check-input shadow-none border-0 align-self-center custom-checkbox bg-red "
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <div
                      className="align-self-center"
                      style={{ width: "80px" }}
                    >
                      <img
                        src={require("../../../public/img/payment/bca.png")}
                        alt="product"
                        className="img-bca"
                      />
                    </div>
                    <div className=" fw-bold f-18 align-self-center ms-5 me-auto">
                      Bank BRI
                    </div>
                    <input
                      className="form-check-input shadow-none border-0 align-self-center custom-checkbox bg-red "
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <div
                      className="align-self-center"
                      style={{ width: "80px" }}
                    >
                      <img
                        src={require("../../../public/img/payment/bni.png")}
                        alt="product"
                        className="img-bni"
                      />
                    </div>
                    <div className="fw-bold f-18 align-self-center ms-5 me-auto">
                      Bank BNI
                    </div>
                    <input
                      className="form-check-input shadow-none border-0 align-self-center custom-checkbox bg-red "
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                  <hr />
                  <h4 className="f-16 fw-bold mb-3">Shopping summary</h4>
                  <div className="d-flex justify-content-between">
                    <div className="color-gray fw-500 f-16">Order</div>
                    <div className="f-18 fw-bold">$ 40</div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="color-gray fw-500 f-16">Delivery</div>
                    <div className="f-18 fw-bold">$ 5</div>
                  </div>

                  <hr />
                  <div className="d-flex justify-content-between mt-3">
                    <div className="d-flex flex-column align-self-start">
                      <div className="f-16 fw-bold">Shopping summary</div>
                      <div className="color-red fw-bold f-18">$ 45</div>
                    </div>
                    <div className="align-self-end">
                      <button
                        data-bs-dismiss="modal"
                        type="button "
                        className="btn  custom-red-btn shadow-none text-white"
                        style={{ width: "140px" }}
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end right columns */}
      </div>
      <style jsx>
        {`
          .f-22 {
            font-size: 22px;
          }
          .f-18 {
            font-size: 18px;
          }
          .f-16 {
            font-size: 16px;
          }

          .f-14 {
            font-size: 14px;
          }

          .f-12 {
            font-size: 12px;
          }

          .fw-400 {
            font-weight: 400;
          }

          .fw-500 {
            font-weight: 500;
          }

          .custom-card {
            box-shadow: 0px 0px 8px rgba(115, 115, 115, 0.25);
            border-radius: 4px;
          }

          .custom-btn {
            border: 1px solid #9b9b9b;
            box-sizing: border-box;
            border-radius: 24px;
            transition: background 0.5s;
          }

          .custom-btn:hover {
            background-color: #db3022;
            border: 1px solid #db3022;
            color: #fff;
          }

          .custom-red-btn {
            background-color: #db3022;
            border: 1px solid #db3022;
            border-radius: 24px;
            transition: background 0.5s;
          }
          .color-p {
            color: #222222;
          }

          .color-red {
            color: #db3022;
          }

          .color-g {
            color: #9b9b9b;
          }

          .bg-red {
            background-color: #db3022 !important;
          }

          .custom-checkbox {
            height: 20px;
            width: 20px;
            border-radius: 4px;
          }
          .border-image {
            border-radius: 8px !important;
            width: 69px;
            height: 69px;
            object-fit: cover;
          }

          .custom-modal-footer {
            box-shadow: 0px -8px 10px rgba(217, 217, 217, 0.25);
            border-radius: 0px 0px 8px 8px;
          }
          .img-bri {
            width: auto;
            height: 30px;
          }
          .img-bca {
            width: auto;
            height: 40px;
          }
          .img-bni {
            width: auto;
            height: 40px;
          }
          @media (max-width: 767px) {
            .border-image {
              border-radius: 8px !important;
              width: 150px;
              height: 150px;
              object-fit: cover;
            }
            .border-md {
              padding: 10px 0px;
              background-color: #db3022;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Checkout;
