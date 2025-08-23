import { useState } from "react";
import data from "./data";

const Accordian = ({ allowMultiple = false }) => {
  const [items, setItems] = useState(data);
  const [isOpen, setIsOpen] = useState({});

  const handleIsOpen = (e, idx) => {
    if (allowMultiple) {
      // to handle multiple open at a time
      const newObj = { ...isOpen };
      newObj[idx] = !newObj[idx];
      setIsOpen(newObj);
    } else {
      // to handle only one open at a time
      const newObj = {};
      newObj[idx] = !isOpen[idx];
      setIsOpen(newObj);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-3">
      {items.map(({ question, answer }, idx) => {
        return (
          <AccordianList
            key={idx}
            idx={idx}
            question={question}
            answer={answer}
            isOpen={isOpen[idx]}
            handleIsOpen={handleIsOpen}
          />
        );
      })}
    </div>
  );
};

function AccordianList({ question, answer, isOpen, handleIsOpen, idx }) {
  return (
    <div className="border border-gray-300 rounded-xl shadow-md overflow-hidden">
      <div
        className="flex justify-between items-center px-4 py-3 bg-yellow-500 cursor-pointer hover:bg-yellow-600 transition-all"
        onClick={(e) => handleIsOpen(e, idx)}
      >
        <p className="text-lg font-semibold text-white">{question}</p>
        <button className="text-xl font-bold text-white">
          {isOpen ? "−" : "+"}
        </button>
      </div>
      <div
        className={`px-4 py-3 bg-white text-gray-700 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default Accordian;
