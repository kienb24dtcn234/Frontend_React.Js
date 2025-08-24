import React, { useState } from "react";

function Ex2() {
  const [color, setColor] = useState<string>("#000000");
  const [submittedColor, setSubmittedColor] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedColor(color);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Color: {submittedColor ? submittedColor : ""}</h2>
      <form onSubmit={handleSubmit}>
        <label>Form</label>
        <div style={{ marginTop: "10px", marginBottom: "10px" }}>
          <label>Màu sắc </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Ex2;
