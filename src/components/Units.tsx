import { styled } from "styled-components";

const Units = () => {
  return (
    <Div>
      <button>Metric System</button>
      <button>Imperial System</button>
    </Div>
  );
};

export default Units;

const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  button {
    border: 0;
    background-color: transparent;
    color: #000;
    font-size: 1.6rem;
  }
`;
