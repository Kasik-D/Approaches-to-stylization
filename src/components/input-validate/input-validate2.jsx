import { useState } from "react";
import styled from "styled-components";

export const Input = styled.input`
  border-radius: 0px;
  margin: 100px;
  color: ${(props) => props.theme.colors.primary};
`;

export const InputValidate2 = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return <Input value={value} onChange={handleChange} />;
};
