import React from "react";

type tButtonField = {
  name: string;
};

const ButtonField: React.FC<tButtonField> = ({ name }) => {
  return <button className="button_field">{name}</button>;
};

export default ButtonField;
