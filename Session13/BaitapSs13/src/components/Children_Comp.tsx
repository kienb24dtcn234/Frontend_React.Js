import React from "react";
interface ChildrenProps {
  fullName: string;
}
const Children_Comp: React.FC<ChildrenProps> = ({ fullName }) => {
  return (
    <div>
      <h2>Họ và tên bên component con: {fullName}</h2>
    </div>
  );
};
export default Children_Comp;
