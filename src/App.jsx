import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

// NOTE: To have the code highlighting and autocompletion as "normal CSS", install the vscode-styled-components extension
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
        <Heading as="h1">App</Heading>
        <Heading as="h2">Section</Heading>
        <Button>Hey!</Button>
        <Heading as="h3">Form</Heading>
        <Input />
      </StyledApp>
    </>
  );
}
export default App;
