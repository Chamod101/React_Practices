import React, { useState } from "react";

const Random_color = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const generateRandomHexColor = () => {
    setColor("")
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }

    setColor(hexColor);
  };

  const generateRandomRgbColor = () => {
    setColor(`rgb(${0},${0},${0})`)
    const R = Math.floor(Math.random() * 256)
    const G = Math.floor(Math.random() * 256)
    const B = Math.floor(Math.random() * 256)
    
    setColor(`rgb(${R},${G},${B})`)

  };

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? () => generateRandomHexColor()
            : () => generateRandomRgbColor()
        }
      >
        Generate Random Color
      </button>
      <div className="Text">
        <h3>{typeOfColor === "hex" ? "Hex Color" : "Rgb Color"}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
};

export default Random_color;
