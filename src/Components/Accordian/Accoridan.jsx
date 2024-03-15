import data from "./data";
import AnsQues from "./AnsQues";
import React, { useState } from "react";

const Accoridan = () => {
  const [show, Setshow] = useState(true);
  const [newData, SetNewData] = useState(data);
  // console.log(data);

  // const handlingToggle = () => {
  //   Setshow(!show);
  // };

  return (
    <>
      <div className="max-w-2xl mx-auto my-auto">
        {newData.map((val) => {
          const { answer, question } = val;
          return <AnsQues key={val.id} question={question} answer={answer} />;
        })}
        {/* {newData.map(({ answer, question }) => <AnsQues question = {question} answer ={answer}/>)} */}
      </div>
    </>
  );
};

export default Accoridan;
