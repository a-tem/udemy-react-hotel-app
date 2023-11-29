import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

// NOTE: To have the code highlighting and autocompletion as "normal CSS", install the vscode-styled-components extension
const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      {/* NOTE: GlobalStyles component shoud not have any children, that's why use fragment around it and sibling StyledApp component */}
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">App</Heading>
            <div>
              <Heading as="h2">Authorization</Heading>
              <Button>Check In</Button>
              <Button variation="secondary" size="small">
                Check Out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input placeholder="Input One" />
              <Input placeholder="Input Two" type="number" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}
export default App;
