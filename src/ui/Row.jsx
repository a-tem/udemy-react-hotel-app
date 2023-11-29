import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: ceenter;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

// NOTE: Specifying the default props of the component that would be applied if no props from the defaultProps object were passed to the component call.
Row.defaultProps = {
  type: "vertical",
};

export default Row;
