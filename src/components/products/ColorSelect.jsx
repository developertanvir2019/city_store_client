import { useState } from "react";

function ColorSelector() {
  // Initialize state to keep track of the selected color
  const [selectedColor, setSelectedColor] = useState(null);

  // Define a list of available colors
  const colors = ["red", "green", "blue", "yellow", "purple"];

  // Function to handle color button click
  const handleColorButtonClick = (color) => {
    // Toggle the selected color: if it's already selected, deselect it, otherwise, select it
    setSelectedColor((prevColor) => (prevColor === color ? null : color));
  };

  return (
    <div className="flex gap-3">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-8 h-8 rounded-full ${
            color === selectedColor ? "ring ring-offset-2 ring-gray-400" : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorButtonClick(color)}
        ></button>
      ))}
    </div>
  );
}

export default ColorSelector;
