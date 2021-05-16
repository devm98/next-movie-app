import React from "react";

function Carousel({ coverImages }) {
  return (
    <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
      <ol className="carousel-indicators">
        {coverImages.map((item, idx) => (
          <li
            key={idx}
            data-target="#carouselExampleIndicators"
            data-slide-to={idx}
            className={idx === 0 ? "active" : ""}
          />
        ))}
      </ol>
      <div className="carousel-inner" role="listbox">
        {coverImages.map((item, idx) => (
          <div key={idx} className={`carousel-item ${idx === 0 ? " active" : ""}`}>
            <img className="d-block img-fluid" src={item.url} alt="First slide" />
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
