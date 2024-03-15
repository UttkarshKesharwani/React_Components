import React, { useState } from "react";

const Star = () => {
  const [rating, SetRating] = useState(null);

  return (
    <>
      <div>
        {[...Array(5)].map((val, ind) => {
          console.log(val, ind);
        })}
      </div>
    </>
  );
};

export default Star;
