import React from "react";
import "./SubHome.css";

const SubHome = (props) => {
  const { img, name, duration, price } = props.course || {};
  // console.log(props);
  return (
    <div>
      <div className="sub-home">
        <img className="img" src={img} alt="" />
        <div className="sub-text">
          <h1>
            <i class="fas fa-graduation-cap"></i>
              <span>{name}</span>
          </h1>
          <h2>
            <i class="fas fa-dollar-sign"> </i>
              <span>{price}</span>
          </h2>
          <p>
            <i class="far fa-clock"></i>  <span>{duration}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubHome;
