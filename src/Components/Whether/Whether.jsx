import React, { useEffect, useRef, useState } from "react";

const Whether = () => {
  const [name, setName] = useState("delhi");
  const [temp, setTemp] = useState(null);

  const val = useRef(null);

  useEffect(() => {
    fetchApi();
  }, [name]);

  const fetchApi = async () => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7ce3bd8925f4fa93b47329d0baf054c7&units=metric`
    );
    // console.log(data);
    const json = await data.json();
    console.log(json);
    setName(json.name);
    setTemp(json.main.temp);
    console.log(temp);
  };

  const printnames = () => {
    setName(val.current.value);
  };

  return (
    <div>
      <div className="bg-blue-400 max-w-sm mx-auto">
        <div>
          <input type="text" ref={val} />
          <button onClick={printnames}>🔍</button>
        </div>
        <div>
          <img
            className="bg-transparent mix-blend-multiply w-12"
            alt="Whether_img"
            src="https://i.pinimg.com/736x/77/0b/80/770b805d5c99c7931366c2e84e88f251.jpg"
          />

          <h1>{name}</h1>
          <h1>{temp}</h1>
        </div>
      </div>
    </div>
  );
};

export default Whether;
