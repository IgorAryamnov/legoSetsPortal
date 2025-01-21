import { useState } from "react";
import { elements } from "../utils/constants";

export function Input({ value, changeValue }) {
  const [validation, setValidation] = useState(true);

  function HandleChange(e) {
    let currentValue = e.target.value;
    if (elements.indexOf(currentValue) === -1) {
      setValidation(false);
      changeValue({ value: e.target.value, validation: false });
    } else {
      setValidation(true);
      changeValue({ value: e.target.value, validation: true });
    }
  }

  return (
    <div>
      <input
        value={value.value}
        onChange={(e) => {
          HandleChange(e);
        }}
      />
      {validation ? null : <p>Такого элемента нет</p>}
    </div>
  );
}
