import React from "react";
import dummy_image from "../assets/dummy_image.png";

function Title(props) {
 
 const {name,leadText}=props;

  return (
    <div className="container">
      <div className="row text-center align-items-center my-5 pd-6">
        <div className="col-12 col-md-6">
          <img 
          className="img-fluid rounded-circle w-75"
          src={dummy_image}
          alt="dummy_image"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            Hi,I am <span className="text-info">{name}</span>
            <h4 className="font-weight-light">{leadText}</h4>
          </div>
        </div>
      </div>
    </div>

  );
  
}

export default Title;