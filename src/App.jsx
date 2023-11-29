import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

// NOTE: To have the code highlighting and autocompletion as "normal CSS", install the vscode-styled-components extension
const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
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
