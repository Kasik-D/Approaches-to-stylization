import styled, { css, keyframes } from "styled-components";

const hoverAnimation = keyframes`
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(360deg);
    }
`;

export const ButtonSCAnimation = styled.button`
  font-size: 2rem;
  color: white;
  background-color: black;
  border-radius: 12px;
  padding: 20px 50px;
  ${({ isAnimatedOnHover }) => {
    if (isAnimatedOnHover) {
      return css`
        &:hover {
          animation: ${hoverAnimation} 2s infinite linear;
          color: red;
        }
      `;
    }
  }};
`;
