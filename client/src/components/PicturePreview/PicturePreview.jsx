import React from "react";
import "./PicturePreview.css";
import { Link } from "react-router-dom";

const PicturePreview = ({ id, artist, price, thumbnailUrl }) => {
  return (
    <Link className="PicturePreview" to={`/picture/${id}`}>
      <figure>
        <img src={thumbnailUrl} />
      </figure>
      <div>
        <span>Artist: {artist}</span>
        <span>Price: {(price / 100).toFixed(2)}€</span>
      </div>
    </Link>
  );
};

export default PicturePreview;
