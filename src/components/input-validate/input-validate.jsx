import { useState } from "react";

import styles from "./input-validate.module.css";

export const InputValidate = ({ marginTop, marginBottom }) => {
  const [value, setValue] = useState("");

  const setStyles = (value) => {
    if (value.length === 0) {
      return styles.base;
    } else if (value.length > 10) {
      return styles.invalid;
    } else {
      return styles.active;
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      style={{
        marginTop,
        marginBottom,
      }}
      value={value}
      onChange={handleChange}
      className={setStyles(value)}
    />
  );
};
