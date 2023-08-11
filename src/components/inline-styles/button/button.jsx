import { useState } from "react";

export const INStyleButton = () => {
  const [backgroundColor, setBackgroundColor] = useState("yellow");

  const style = {
    color: "red",
    height: "50px",
    width: "100px",
    backgroundColor,
  };


  const onClick = () => {
    setBackgroundColor("green");
  };

  return (
    <button style={style} onClick={onClick}>
      Click me
    </button>
  );
};
