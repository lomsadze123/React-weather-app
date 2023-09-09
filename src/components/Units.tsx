import { styled } from "styled-components";

const Units = ({
  newUnit,
  setUnit,
}: {
  newUnit: string;
  setUnit: (newUnit: string) => void;
}) => {
  return (
    <Div>
      <Button color={newUnit === "metric"} onClick={() => setUnit("metric")}>
        Metric System
      </Button>
      <Button
        color={newUnit === "imperial"}
        onClick={() => setUnit("imperial")}
      >
        Imperial System
      </Button>
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
    font-size: 1.6rem;
  }

  @media (min-width: 476px) {
    justify-content: flex-end;
  }
`;

const Button = styled.button<{ color: boolean }>`
  color: ${(props) => (props.color ? "green" : "#000")};

  @media (min-width: 951px) {
    cursor: pointer;
  }
`;
