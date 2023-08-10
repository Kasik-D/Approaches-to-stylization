import React from "react";
import "./style.css";
import { useLayoutEffect } from "react";

export const ShadowComponent = () => {
  useLayoutEffect(() => {
    const myWrapper = document.getElementById("wrapper");
    const myBody = document.createElement("div");

    const shadow = myBody.attachShadow({ mode: "open" });

    const button = document.createElement("button");
    button.setAttribute("class", "base-button");

    button.textContent = "Shadow Button";

    const shadowStyle = document.createElement("style");
    shadowStyle.textContent = `
          .base-button {
            padding: 10px 20px;
            background-color: khaki;
            border-radius: 15px;
            color: black;       
            border-style: none;
          }
        `;

    shadow.appendChild(shadowStyle);
    shadow.appendChild(button);
    myWrapper.after(myBody);
  }, []);

  return (
    <div id="wrapper">
      <button className="base-button">Base Button</button>
    </div>
  );
};
