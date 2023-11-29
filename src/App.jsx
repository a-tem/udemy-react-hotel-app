import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

// NOTE: To have the code highlighting and autocompletion as "normal CSS", install the vscode-styled-components extension
const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(
    --color-brand-600
  ); // NOTE: It's possible to use css variables in styledComponents
  color: var(--color-brand-50);
  box-shadow: var(--shadow-small);
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-small);
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      {/* NOTE: GlobalStyles component shoud not have any children, that's why use fragment around it and sibling StyledApp component */}
      <GlobalStyles />
      <StyledApp>
        <H1>Styled text</H1>
        <Button>Hey!</Button>
        <Input />
      </StyledApp>
    </>
  );
}
export default App;
