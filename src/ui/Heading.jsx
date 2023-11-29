import styled, { css } from "styled-components";

const Heading = styled.h1`
  /* NOTE: To access the props of the component, use arrow function in interpolation and access directly the prop by the name passed to the component call <Heading as="xxx"> in this example. */
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.6rem;
      font-weight: 500;
    `}
  line-height: 1.4;
`;

export default Heading;
