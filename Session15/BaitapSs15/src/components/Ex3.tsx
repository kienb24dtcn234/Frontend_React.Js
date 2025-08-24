import React, { useState } from "react";
function Ex3() {
  const [birthday, setBirthday] = useState<string>("");
  const [submittedBirthday, setSubmittedBirthday] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedBirthday(birthday);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Ngày sinh: {submittedBirthday ? submittedBirthday : ""}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="birthday">Ngày sinh:</label>
        <input
          id="birthday"
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          style={{ marginLeft: "10px", marginRight: "10px" }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Ex3;
