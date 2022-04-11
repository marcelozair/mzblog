import React from "react";
import { tInputChange } from "types/form/event.type";

type tInputField = {
  onChange?: (event: tInputChange) => any;
  placeholder: string;
  required?: boolean;
  label: string;
  type?: string;
  name?: string;
  id?: string;
};

const InputField: React.FC<tInputField> = ({
  required = false,
  type = "text",
  placeholder,
  onChange,
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
        onChange={onChange}
        required={required}
        name={name}
        type={type}
        id={id}
      />
    </div>
  );
};

export default InputField;
