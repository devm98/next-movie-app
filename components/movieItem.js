import React from "react";
import Link from "next/link";

function MovieItem({ id, name, releaseYear, description, rating, genre, image, ...props }) {
  const shorten = (text = "", maxLength) => {
    if (text && text.length >= maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <Link href={`/movies/${id}`}>
          <a>
            <img className="card-img-top" src={image} alt="" />
          </a>
        </Link>
        <div className="card-body">
          <h4 className="card-title">
            <Link href={`/movies/${id}`}>
              <a>{name}</a>
            </Link>
          </h4>
          <p className="card-text">{shorten(description, 100)}</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">{rating}</small>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
