import React from "react";
function RightSection({
    imageURL,
  productName,
  productDescription,
  learnMore,
  LearnMore
  
}) {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div><a href={learnMore} style={{ textDecoration: "none" }}>{LearnMore}{" "} <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a></div>
        </div>
        <div className="col-6  ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
