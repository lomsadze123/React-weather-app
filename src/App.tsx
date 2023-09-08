import styled from "styled-components";
import MainInput from "./components/MainInput";

function App() {
  return (
    <Body>
      <MainInput />
    </Body>
  );
}

export default App;

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    circle 993px at 0.5% 50.5%,
    rgba(137, 171, 245, 0.37) 0,
    #f5f7fc 100.2%
  );
`;
