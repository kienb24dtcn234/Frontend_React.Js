import React from "react";
const Calculation: React.FC = () => {
  const add = (a: number, b: number): number => a + b;
  const subtract = (a: number, b: number): number => a - b;
  const multiply = (a: number, b: number): number => a * b;
  const divide = (a: number, b: number): number =>
    b !== 0 ? a / b : NaN; 
  const x = 10;
  const y = 5;
  return (
    <div>
      <h2>Kết quả tính toán</h2>
      <p>
        {x} + {y} = {add(x, y)}
      </p>
      <p>
        {x} - {y} = {subtract(x, y)}
      </p>
      <p>
        {x} × {y} = {multiply(x, y)}
      </p>
      <p>
        {x} ÷ {y} = {divide(x, y)}
      </p>
    </div>
  );
};

export default Calculation;
