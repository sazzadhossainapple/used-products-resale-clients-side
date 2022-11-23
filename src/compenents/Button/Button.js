import React from "react";

const Button = ({ children, classes }) => {
  return (
    <button
      className={`btn bg-[#ffc600] rounded-md  text-[#111111] border-none hover:bg-[#eebe0f]
    ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
