import React, { useState } from "react";

const div1 = {
  margin: "50px",
  display: "inline-block",
};
const div2 = {
  margin: "50px",
  display: "inline-block",
};

export default function Task() {
  const [color, setcolor] = useState("");
  const [colorcode, setcolor2] = useState("");
  return (
    <>
      <div style={div1}>
        <textarea style={{ backgroundColor: color }}> </textarea>
        <div>
          <input
            style={{ marginLeft: "50px" }}
            size="5"
            type="text"
            value={color}
            onChange={(e) => setcolor(e.target.value)}
          />
        </div>
      </div>
      <div style={div2}>
        <textarea style={{ backgroundColor: colorcode }}> </textarea>

        <div>
          <input
            style={{ marginLeft: "50px" }}
            size="5"
            type="text"
            value={colorcode}
            onChange={(e) => setcolor2(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
