import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function CardProduct({
  image,
  titleProduct,
  price,
  linkDetailProduct,
  seller,
  Key,
}) {
  return (
    <div className="col-6 col-md-4 col-lg-2 my-3" key={Key}>
      <div className="rounded-md shadow overflow-hidden">
        <img className="ms-3 mt-2 " src={image} layout="responsive" style={{ objectFit: "contain" }} />
        <div className="p-3">
          <Link href={linkDetailProduct}>
            <a className="m-0 fs-6 fw-bold d-inline-block text-truncate">{titleProduct}</a>
          </Link>
          <p className="text-danger fw-bold fs-6">{price}</p>
          <p className="color-gray" style={{ fontSize: "12px" }}>
            {seller}
          </p>
          <div className="d-flex star">
            <span className="me-1 material-icons">
              star
            </span>
            <span className="me-1 material-icons">
              star
            </span>
            <span className="me-1 material-icons">
              star
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
                a{
                    max-width:140px;
                }
                .star{
                  color: #FFBA49;
                }
                .image-product {
                  object-fit: contain;
                }
            `}
      </style>
    </div>
  );
}
