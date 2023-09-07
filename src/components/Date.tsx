import styled from "styled-components";

export const Date = () => {
  return (
    <Div>
      <h2>Wednesday, 18:59</h2>
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
