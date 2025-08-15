import React, { useEffect, useRef, useState } from "react";

// const Star = ({ starCount = 5 }) => {
//   const [rating, setRating] = useState(0);
//   const [hover,setHover] = useState(0);

//   const starRef = useRef([]);

//   useEffect(() => {
//     for (let i = 0; i < starCount; i++) {
//      starRef.current[i].classList.toggle("text-yellow-400",(i<rating || i<hover))
//     }
//   }, [rating,starCount,hover]);

//   return (
//     <div>
//       {[...new Array(starCount)].map((_, idx) => {
//         return (
//           <span
//             className="text-6xl"
//             key={idx}
//             onClick={() => setRating(idx+1)}
//             ref={(refVal) => (starRef.current[idx] = refVal)}
//             onMouseEnter={()=>setHover(idx+1)}
//             onMouseLeave={()=>setHover(0)}
//           >
//             &#x2605;
//           </span>
//         );
//       })}
//       <p>{rating}</p>
//     </div>
//   );
// };

// export default Star;





const Star = ({ starCount = 5 }) => {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  return (
    <div>
      {[...new Array(starCount)].map((_, idx) => {
        const isActive = rating > idx || hover > idx;
        return (
          <span
            key={idx}
            className={`text-5xl ${isActive ? "text-yellow-300" : ""}`}
            onClick={() => setRating(idx + 1)}
            onMouseEnter={() => setHover(idx + 1)}
            onMouseLeave={() => setHover(0)}
          >
            &#x2605;
          </span>
        );
      })}
      <p>{rating}</p>
    </div>
  );
};

export default Star;
