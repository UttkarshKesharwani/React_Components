import React from "react";

const Images = ({ img }) => {
  // console.log(img.urls.thumb);
  const { thumb } = img.urls;

  return (
    <div>
      <div>
        <img src={thumb} alt="Images" className="w-60 h-60 object-cover" />
      </div>
    </div>
  );
};

export default Images;
