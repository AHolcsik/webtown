import React from "react";

const images = require.context("../../public/assets", true);
const imageList = images.keys().map((image) => images(image));

function Masonry() {
  return (
    <div className="row g-0" data-masonry='{"percentPosition": true }'>
      {imageList.map((image, index) => (
        <div className="col-lg-3 col-sm-6 mb-2 px-1">
          <img
            className="img-fluid rounded "
            key={index}
            src={image}
            alt={`image-${index}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Masonry;
