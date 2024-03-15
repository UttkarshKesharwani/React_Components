import React from "react";
import { useState } from "react";

const AnsQues = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="bg-amber-800 my-3 px-2 py-2 text-white">
        <div
          className="flex justify-between "
          onClick={() => setIsActive(!isActive)}
        >
          <span>{question}</span>
          <span>{isActive ? "–" : "+"}</span>
        </div>
        {isActive && <div>{answer}</div>}
      </div>
    </div>
  );
};

export default AnsQues;
