import React from "react";
type User = {
  firstName: string;
  lastName: string;
};
const formatName = (user: User): string => {
  return `${user.firstName} ${user.lastName}`;
};

const FormatName: React.FC = () => {
  const user: User = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  return (
    <div>
      <h2>Họ và tên đầy đủ:</h2>
      <p>{formatName(user)}</p>
    </div>
  );
};
export default FormatName;
