import styled from "styled-components";

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
  border-radius: 7px;
  background-color: purple;
  color: white;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <H1>Styled text</H1>
      <Button>Hey!</Button>
      <Input />
    </StyledApp>
  );
}
export default App;
