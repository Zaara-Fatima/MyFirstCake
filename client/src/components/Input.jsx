import React, { useId } from "react";

export const Input = ({
  label,
  placeholder = "",
  onsubmit,
  className = "",
  type = "text",
}) => {
  const id = useId();
  return (
    <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full min-w-0 px-3 py-2 rounded-xl border-[#797878c1] border ${className} outline-none`}
        ></input>

    </div>
  );
};

