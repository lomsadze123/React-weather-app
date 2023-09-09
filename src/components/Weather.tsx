import styled from "styled-components";
// import Sun from "../assets/01d.svg";

interface Types {
  name: string;
  country: string;
  description: string;
  temp: number;
  feels_like: number;
  image: string;
  unit: string;
}

const Weather = ({
  name,
  country,
  description,
  temp,
  feels_like,
  image,
  unit,
}: Types) => {
  return (
    <Header>
      <h1>
        {name}, {country}
      </h1>
      <p>{description}</p>
      <img src={`/src/assets/${image}.svg`} alt="sun" />
      <h2>
        {Math.round(temp)}°{unit === "metric" ? "C" : "F"}
      </h2>
      <p>
        Feels like {Math.round(feels_like)}°{unit === "metric" ? "C" : "F"}
      </p>
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

  @media (min-width: 601px) {
    border-radius: 3rem 3rem 0 0;
  }

  @media (min-width: 951px) {
    flex-grow: 1;
    border-radius: 3rem 0 0 3rem;
  }
`;
