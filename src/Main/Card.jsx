import React from "react";
import { Link } from "react-router-dom";

const Card = ({ Navto, imageLink, title, descirption }) => {
  return (
    <>
      <Link to={Navto} className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={imageLink} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center block">{title}</h2>
          <p className="text-center">{descirption}</p>
        </div>
      </Link>
    </>
  );
};

export default Card;
