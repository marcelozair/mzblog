import React from "react";

type tInputField = {
  placeholder: string;
  label: string;
  type?: string;
  id?: string;
  required?: boolean;
  name?: string;
};

const InputField: React.FC<tInputField> = ({
  required = false,
  type = "text",
  placeholder,
  label,
  name,
  id,
}) => {
  return (
    <div className="input_field">
      <label className="input_field-label">{label}</label>
      <input
        className="input_field-input"
        placeholder={placeholder}
        required={required}
        name={name}
        type={type}
        id={id}
      />
    </div>
  );
};

export default InputField;
