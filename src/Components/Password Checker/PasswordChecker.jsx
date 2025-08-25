import React, { useState } from "react";

const data = ["UpperCase", "LowerCase", "Special Character", "Numeric"];

const PasswordChecker = ({ minLength = 8 }) => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const [isRight, setIsRight] = useState({
    Numeric: false,
    LowerCase: false,
    UpperCase: false,
    "Special Character": false,
  });

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setText(value);

    let newObj = {
      Numeric: /\d/.test(value),
      LowerCase: /[a-z]/.test(value),
      UpperCase: /[A-Z]/.test(value),
      "Special Character": /[!@#$%^&*(),.?":{}|<>_\-+=\[\]\\\/]/.test(value),
    };

    setIsRight(newObj);
  };

  const strongRegex = new RegExp(
    `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*(),.?":{}|<>_\\-+=\\[\\]\\\\/]).{${minLength},}$`
  );

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-2xl space-y-5">
        <div>
          <div className="relative w-full">
            <input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              value={text}
              onChange={handlePasswordChange}
              className="w-full border rounded-lg px-3 py-2 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-emerald-500"
            >
              {show ? "close" : "open"}
            </button>
          </div>

          <ul className="space-y-2 mt-4">
            {data.map((val, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm font-medium"
              >
                {isRight[val] ? "✅" : "❌"}
                <span
                  className={
                    isRight[val] ? "text-emerald-600" : "text-gray-600"
                  }
                >
                  {val}
                </span>
              </li>
            ))}
          </ul>

          <div
            className={`mt-4 text-center font-semibold p-2 rounded-lg ${
              strongRegex.test(text)
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {strongRegex.test(text) ? "✅ Strong Password" : "❌ Weak Password"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordChecker;
