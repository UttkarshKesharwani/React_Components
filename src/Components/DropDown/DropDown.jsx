import React, { useState } from "react";
import { data } from "./data";

const DropDown = () => {
  const [detail, setDetail] = useState({
    country: "",
    state: "",
    district: "",
  });

  const [state, setState] = useState([]);
  const [district, setDistrict] = useState([]);

  const country = data.map((con) => con.country);

  const handleCountryChange = (e) => {
    const countrySelected = e.target.value;
    if (countrySelected !== "default") {
      setDetail((prev) => ({
        ...prev,
        [e.target.name]: countrySelected,
        state: "",
        district: "",
      }));

      // find state for selected country
      const countryObj = data.find((ele) => ele.country === countrySelected);
      if (countryObj && countryObj.states) {
        setState(countryObj.states.map((ele) => ele.name));
      }
      setDistrict([]);
    }
  };

  const handleStateChange = (e) => {
    const stateSelected = e.target.value;
    if (stateSelected !== "default") {
      setDetail((prev) => ({
        ...prev,
        [e.target.name]: stateSelected,
        district: "",
      }));

      const district = data
        .find((c) => c.country === detail.country)
        .states.find((s) => s.name === stateSelected).districts;
      console.log(district);
      if (district) {
        setDistrict(district);
      }
    }
  };

  const handleDistrictChange = (e) => {
    const districtSelected = e.target.value;
    if (districtSelected !== "default") {
      setDetail((prev) => ({ ...prev, [e.target.name]: districtSelected }));
    }
  };

  return (
    <div className="bg-gray-200 h-screen flex place-items-center  justify-evenly m-auto max-w-6xl">
      <div className="p-4 flex place-items-center gap-2">
        <select
          name="country"
          id=""
          className="p-2 outline-none rounded-md"
          onChange={handleCountryChange}
        >
          <option value="default">Select Country</option>
          {country.length &&
            country.map((coun, idx) => (
              <option value={coun} key={coun}>
                {coun}
              </option>
            ))}
        </select>

        <select
          name="state"
          id=""
          className="p-2 outline-none rounded-md"
          onChange={handleStateChange}
          disabled={!detail.country}
        >
          <option value="default">Select State</option>
          {state.length &&
            state.map((coun, idx) => (
              <option value={coun} key={coun}>
                {coun}
              </option>
            ))}
        </select>
        <select
          name="district"
          id=""
          className="p-2 outline-none rounded-md"
          onChange={handleDistrictChange}
          disabled={!detail.state}
        >
          <option value="default">Select District</option>
          {district.length &&
            district.map((coun, idx) => (
              <option value={coun} key={coun}>
                {coun}
              </option>
            ))}
        </select>
      </div>
      <div>
        <h3 className="font-bold">You have selected</h3>
        {Object.entries(detail).map((entries, idx) => {
          // console.log(entries);
          return <div key={idx}>{entries[0] + ":" + entries[1]}</div>;
        })}
      </div>
    </div>
  );
};

export default DropDown;
