import { Rating, Typography } from "@mui/material";
import React from "react";
import "./Service.css";

const Service = (props) => {
  const { id, name, duration, price, tutor, rating, img, toots } =
    props.course || {};
  return (
    <div className="single-course">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="text-box">
        <h3>
          <i class="fas fa-sort-amount-down"></i> <span>Id : {id}</span>
        </h3>
        <h1>
          <i class="fas fa-graduation-cap"></i>{" "}
          <span>Course name : {name}</span>
        </h1>
        <h5>
          <i class="far fa-clock"></i> <span>Duration : {duration}</span>
        </h5>
        <h3>
          <i class="fas fa-dollar-sign"></i> <span>Price : {price}</span>
        </h3>
        <h3>
          <i class="fas fa-chalkboard-teacher"></i>{" "}
          <span>Teacher : {tutor}</span>
        </h3>
        <h5>
          <i class="fas fa-laptop"></i> <span>Software : {toots}</span>
        </h5>
        <h5>
          <Typography component="legend">Rating</Typography>
          <Rating name="read-only" value={rating} readOnly />{" "}
          <span>{rating}</span>
        </h5>
      </div>
    </div>
  );
};

export default Service;
