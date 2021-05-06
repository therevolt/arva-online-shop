import React from "react";

function Rating({ rating, id, style }) {
  let a = "";
  for (let i = 0; i < rating; i++) {
    a += i;
  }
  let lop = a.split("");
  return (
    <div className="d-flex">
      <div className="rate">
        {lop.map((data, index) => {
          return (
            <img
              key={index}
              src={require("../../../public/img/Star.svg")}
              alt="rating"
              className={style}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Rating;
