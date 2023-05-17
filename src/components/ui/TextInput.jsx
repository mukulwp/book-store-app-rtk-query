import React from "react";

const TextInput = ({ title, id, type, ...rest }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id}>{title}</label>
      <input required className="text-input" type={type} id={id} {...rest} />
    </div>
  );
};

export default TextInput;
