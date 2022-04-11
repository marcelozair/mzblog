import React, { useState } from "react";
import InputField from "./InputField";
import { tInputChange } from "types/form/event.type";

const InputPassword: React.FC = () => {
  const [levelPass, setLevelPass] = useState(0);

  const onChangePassword = (event: tInputChange) => {
    const { name, value } = event.target;
    let level = 0;

    if (value.length >= 8) level++;
    if ((/([0-9])/g.test(value) || /([A-Z])/g.test(value)) && level > 0) level++;
    if ((/[!-/ :-@ \[-` {-~]/gm.test(value)) || value.length >= 15 && level > 0) level++;
    setLevelPass(level);
  };

  return (
    <div className="mb-6">
      <InputField
        type="password"
        required={true}
        name="password"
        label="Password"
        onChange={onChangePassword}
        placeholder="a leats 8 characters"
      />
      <div className="w-full flex gap-2">
        <div
          className={
            "w-full h-2 rounded-full " +
            (levelPass > 0 ? "bg-red-400" : "bg-fontcolor-50")
          }
        ></div>
        <div
          className={
            "w-full h-2 rounded-full " +
            (levelPass > 1 ? "bg-yellow-400" : "bg-fontcolor-50")
          }
        ></div>
        <div
          className={
            "w-full h-2 rounded-full " +
            (levelPass > 2 ? "bg-emerald-500" : "bg-fontcolor-50")
          }
        ></div>
      </div>
    </div>
  );
};

export default InputPassword;
