import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, linkTo, imgLink }) => {
  return (
    <Link to={linkTo}>
      <div className="card bg-base-100 image-full w-72 shadow-xl">
        <figure>
          <img src={imgLink} alt="sort" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center block">{title}</h2>
          <p className="block text-center">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
