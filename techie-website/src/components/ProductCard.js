import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCard = ({
  grid,
  title,
  description,
  price,
  brand,
  images,
  rating,
  _id,
}) => {
  let location = useLocation();
  return (
    <div
      className={` ${
        location.pathname === "/product" ? `gr-${grid}` : "col-3"
      } `}
    >
      <Link to={`/product/${_id}`} className="product-card position-relative">
        <div className="product-image">
          <img
            src={images && images[0].url}
            className="img-fluid"
            alt="product"
          />
          <img
            src={images && images[1].url}
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">{brand}</h6>
          <h5 className="product-title">
            {title && title.length > 20 ? title.slice(0, 20) + "..." : title}
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={rating}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            {description && description.length > 50
              ? description.slice(0, 50) + "..."
              : description}
          </p>
          <p className="price">{price}</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="addcart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
