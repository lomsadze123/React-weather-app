import styled from "styled-components";
import Weather from "./Weather";
import Date from "./Date";
import WeatherFeatures from "./WeatherFeatures";
import Units from "./Units";

const MainInput = () => {
  return (
    <Div>
      <Weather />
      <div className="padding">
        <Date />
        <form>
          <input type="text" placeholder="Search a city..." />
        </form>
        <WeatherFeatures />
        <Units />
      </div>
    </Div>
  );
};

export default MainInput;

const Div = styled.div`
  background-color: #f7f7f7;
  max-width: 60rem;
  width: 100%;

  .padding {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  input {
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
    border-radius: 1rem;
    border: 0;
    padding: 1rem 0;
  }
`;
