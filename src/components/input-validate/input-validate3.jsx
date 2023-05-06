import { useState } from "react";
import styled from "styled-components";
import { Input } from "./input-validate2";

const InputExtending = styled(Input)`
  color: ${(props) => props.theme.colors.secondary};
`;

export const InputValidate3 = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <InputExtending value={value} onChange={handleChange} />;
};
