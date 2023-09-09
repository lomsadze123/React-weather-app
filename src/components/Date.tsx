import styled from "styled-components";

const Dates = ({ time, unit }: { time: number; unit: string }) => {
  const newDate = new Date(time * 1000);
  const bool = unit === "metric";

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: !bool,
  };
  const formatDate = newDate.toLocaleDateString(undefined, options);

  return (
    <Div>
      <h2>{formatDate}</h2>
    </Div>
  );
};

export default Dates;

const Div = styled.div`
  text-align: center;
  h2 {
    font-size: 2.4rem;
  }
`;
