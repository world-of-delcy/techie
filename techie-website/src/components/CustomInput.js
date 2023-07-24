import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, classname, ...args } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`form-control ${classname}`}
        {...args}
      />
    </div>
  );
};

export default CustomInput;
