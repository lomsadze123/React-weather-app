import styled from "styled-components";
import Sun from "../assets/01d.svg";

const Weather = () => {
  return (
    <Header>
      <h1>Rustavi, GE</h1>
      <p>clear sky</p>
      <img src={Sun} alt="sun" />
      <h2>30°C</h2>
      <p>Feels like 31°C</p>
    </Header>
  );
};

export default Weather;

const Header = styled.header`
  background-color: white;
  padding: 3rem;
  text-align: center;
  img {
    max-width: 30rem;
    width: 100%;
    height: auto;
  }
  h1 {
    font-size: 3.8rem;
  }
  p {
    font-size: 2.4rem;
    margin: 1rem 0 2rem 0;
  }
  h2 {
    font-size: 8.4rem;
  }
  h2 + p {
    font-size: 1.6rem;
    margin: 0;
  }
`;
