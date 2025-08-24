import { useState } from "react";
import data from "./data";

const NestedAccordian = ({ allowMultiple = false, details = data, level = 0 }) => {
  const [open, setOpen] = useState({});

  const handleAccordianListClick = (e, idx) => {
    if (allowMultiple) {
      const newObj = { ...open };
      newObj[idx] = !open[idx];
      setOpen(newObj);
    } else {
      const newObj = {};
      newObj[idx] = !open[idx];
      setOpen(newObj);
    }
  };

  return (
    <div className={`pl-${level * 4}`}>
      {details.map(({ answer, question, children }, idx) => {
        return (
          <AccordianList
            key={idx}
            idx={idx}
            question={question}
            answer={answer}
            children={children}
            isOpen={open[idx]}
            handleClick={handleAccordianListClick}
            level={level}
          />
        );
      })}
    </div>
  );
};

function AccordianList({
  idx,
  question,
  answer,
  children,
  isOpen,
  handleClick,
  level,
}) {

  const bgColors = [
    "bg-yellow-600",
    "bg-yellow-500",
    "bg-yellow-400",
    "bg-yellow-300",
  ];

  return (
    <div className={`p-3 border-l-4 border-yellow-800`}>
      <div
        className={`flex justify-between ${bgColors[level % bgColors.length]} 
        p-2 cursor-pointer rounded-md`}
        onClick={(e) => handleClick(e, idx)}
      >
        <p className="font-medium">{question}</p>
        <button>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && (
        <>
          <p className="bg-slate-100 p-2 border border-md mt-1 rounded-md text-sm">
            {answer}
          </p>
          {children && children.length > 0 && (
            <NestedAccordian
              allowMultiple={true}
              details={children}
              level={level + 1}
            />
          )}
        </>
      )}
    </div>
  );
}

export default NestedAccordian;
