import { useEffect, useRef, useState } from "react";

const Otp = ({ length }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [isNumber, setIsNumber] = useState(true);
  const [number, setNumber] = useState("");
  const allInputExits = otp;
  const inputRef = useRef([]);
  const numberRef = useRef("");

  useEffect(() => {
    if (!isNumber) inputRef?.current[0]?.focus();
  }, [isNumber]);

  const findIdxEmptyBox = (newOtp) => newOtp.findIndex((ele) => ele === "");

  const handleOnChange = (e, idx) => {
    let value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[idx] = value.slice(-1);
    setOtp(newOtp);

    let emptyIdx = findIdxEmptyBox(newOtp);
    if (value && idx + 1 <= length && emptyIdx !== -1)
      inputRef?.current[emptyIdx]?.focus();
  };

  const handleKeyUP = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx >= 0) {
      inputRef?.current[idx - 1]?.focus();
    }
    if (e.key === "ArrowRight" && idx + 1 < length) {
      inputRef?.current[idx + 1]?.focus();
      let len = inputRef?.current[idx + 1]?.value.length || 0;
      inputRef?.current[idx + 1]?.setSelectionRange(len, len);
    }
    if (e.key === "ArrowLeft" && idx > 0) {
      inputRef?.current[idx - 1]?.focus();
    }
  };

  const handleInputFocus = (e) => {
    let len = e.target.value.length;
    e.target?.setSelectionRange(len, len);
  };

  const handleOnPaste = async (e, idx) => {
    const data = (await window.navigator.clipboard.readText()).trim();
    setOtp(data.split(""));
    inputRef?.current[idx]?.focus();
  };

  const handleNumberChange = (e) => {
    const num = e.target.value;
    if (isNaN(num)) return;
    setNumber(e.target.value);
  };

  const onFromSubmit = (e) => {
    e.preventDefault();
    const phone = numberRef?.current?.value;
    const phoneRegex = /^[6-9]\d{9}$/;
    if (phoneRegex.test(phone)) {
      setIsNumber(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-4xl w-full bg-gray-300 rounded-lg shadow-lg p-20 flex flex-col md:flex-row gap-10">
        {/* Left - QR Section */}
        <div className="flex flex-col items-center justify-center text-center md:w-1/2 w-full">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=kdj"
            alt="QR"
            className="mb-4"
          />
          <p className="text-sm text-gray-600 px-4">
            <span className="font-medium text-black">
              Use Camera App to Scan QR.
            </span>
            <br />
            Click the link generated to redirect to the JioHotstar Mobile App.
          </p>
        </div>

        {/* Right - Form or OTP Section */}
        <div className="md:w-1/2 w-full">
          <div className="mb-6 text-center">
            <p className="text-2xl font-bold">Login or Sign up</p>
            <p className="text-gray-600 text-sm">
              Scan QR or enter phone number to continue
            </p>
          </div>

          {isNumber ? (
            <form onSubmit={onFromSubmit} className="space-y-4">
              <div>
                <label htmlFor="number" className="block font-medium mb-1">
                  Phone Number
                </label>
                <input
                  id="number"
                  type="text"
                  value={number}
                  onChange={handleNumberChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="Enter 10-digit mobile number"
                  ref={numberRef}
                />
              </div>
              <p className="text-xs text-gray-500">
                By proceeding, you confirm that you are above 18 years of age
                and agree to the{" "}
                <span className="text-blue-600 font-medium cursor-pointer">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-blue-600 font-medium cursor-pointer">
                  Terms of Use
                </span>
                .
              </p>
              <button
                type="submit"
                className="bg-blue-600 text-white w-full py-2 rounded-md font-semibold hover:bg-blue-700"
              >
                Get OTP
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center">
              <p className="mb-4 text-gray-700">
                OTP sent to: <span className="font-medium">{number}</span>
              </p>
              <div className="flex justify-center mb-4">
                {otp.map((val, idx) => (
                  <input
                    className="h-12 w-12 rounded-md border border-gray-300 text-center mx-1 text-lg focus:outline-blue-500"
                    type="text"
                    key={idx}
                    value={val}
                    onChange={(e) => handleOnChange(e, idx)}
                    ref={(val) => (inputRef.current[idx] = val)}
                    onKeyUp={(e) => handleKeyUP(e, idx)}
                    onFocus={(e) => handleInputFocus(e, idx)}
                    onPaste={(e) => handleOnPaste(e, idx)}
                    inputMode="numeric"
                  />
                ))}
              </div>
              {allInputExits.every((ele) => ele !== "") && (
                <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                  Continue
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Otp;
