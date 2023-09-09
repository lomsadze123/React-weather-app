import styled from "styled-components";

export const Dates = ({ time }: { time: number }) => {
  const newDate = new Date(time * 1000);
  const formatTime = `${newDate.getHours()}:${newDate.getMinutes()}`;

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
  };
  const formatDate = newDate.toLocaleDateString(undefined, options);

  return (
    <Div>
      <h2>
        {formatDate}, {formatTime}
      </h2>
    </Div>
  );
};

export default Date;

const Div = styled.div`
  text-align: center;
  h2 {
    font-size: 2.4rem;
  }
`;
