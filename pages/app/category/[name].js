import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProduct } from "../../../src/config/redux/actions/product";
import { CardProduct } from "../../../src/component/base";
import Rupiah from '../../../src/helper/rupiah'

function index() {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const [state, setState] = useState(null)
  const dataCategory = String(query.name)

  useEffect(() => {
    dispatch(getCategoryProduct(dataCategory))
  }, [dispatch, dataCategory]);

  useEffect(() => {
    if (product) {
      if (product.length > 0) {
        setState(product)
      }
    }
  }, [product]);

  return (
    <div>
      <div className="container">
        <div className="row mt-7 mb-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/app">
                  <a>Home</a>
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/app">
                  <a>Category</a>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {query.name}
              </li>
            </ol>
          </nav>
          <h2 className=" mt-3 fw-bold">{query.name}</h2>

          {state && state.map((item, index) => {
            return (
              <>
                <CardProduct
                  key={item.id}
                  image={item.image[0]}
                  titleProduct={item.name}
                  price={Rupiah(`Rp.${item.price}`)}
                  linkDetailProduct={`/app/product/${item.id}`}
                  seller={item.sellerName}
                />
              </>
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
