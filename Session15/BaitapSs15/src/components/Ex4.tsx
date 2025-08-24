import React, { useState } from "react";
function Ex4() {
  const [progress, setProgress] = useState<number>(0);
  const [submittedProgress, setSubmittedProgress] = useState<number | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedProgress(progress);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>
        Tiến độ hoàn thành:{" "}
        {submittedProgress !== null ? submittedProgress + " %" : "%"}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(Number(e.target.value))}
          style={{ width: "200px", marginTop: "10px", marginBottom: "10px" }}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Ex4;
