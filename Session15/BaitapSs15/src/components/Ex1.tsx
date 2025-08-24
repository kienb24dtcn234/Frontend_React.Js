import React, { useState } from "react";
function Ex1() {
  const [email, setEmail] = useState<string>("");
  const [submittedEmail, setSubmittedEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedEmail(email);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginLeft: "10px", marginRight: "10px" }}
        />
        <button type="submit">Submit</button>
      </form>
      {submittedEmail && (
        <div style={{ marginTop: "20px" }}>
          <pre>{JSON.stringify({ email: submittedEmail }, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
export default Ex1;
