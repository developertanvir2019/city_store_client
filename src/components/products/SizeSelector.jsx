import { useState } from "react";

const SizeSelector = () => {
  const [activeSize, setActiveSize] = useState(null);

  // Function to handle button click
  const handleButtonClick = (size) => {
    setActiveSize(size);
  };

  return (
    <div className="flex gap-3">
      <button
        className={`py-1 px-3 border ${
          activeSize === "S" ? "bg-gray-500 text-white" : ""
        }`}
        onClick={() => handleButtonClick("S")}
      >
        S
      </button>
      <button
        className={`py-1 px-3 border ${
          activeSize === "M" ? "bg-gray-500 text-white" : ""
        }`}
        onClick={() => handleButtonClick("M")}
      >
        M
      </button>
      <button
        className={`py-1 px-3 border ${
          activeSize === "L" ? "bg-gray-500 text-white" : ""
        }`}
        onClick={() => handleButtonClick("L")}
      >
        L
      </button>
      <button
        className={`py-1 px-3 border ${
          activeSize === "XL" ? "bg-gray-500 text-white" : ""
        }`}
        onClick={() => handleButtonClick("XL")}
      >
        XL
      </button>
      <button
        className={`py-1 px-3 border ${
          activeSize === "2XL" ? "bg-gray-500 text-white" : ""
        }`}
        onClick={() => handleButtonClick("2XL")}
      >
        2XL
      </button>
    </div>
  );
};

export default SizeSelector;
