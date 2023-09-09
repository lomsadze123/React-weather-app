import styled from "styled-components";
import d1 from "../assets/01d.svg";
import d2 from "../assets/02d.svg";
import d3 from "../assets/03d.svg";
import d4 from "../assets/04d.svg";
import d9 from "../assets/09d.svg";
import d10 from "../assets/10d.svg";
import d11 from "../assets/11d.svg";
import d13 from "../assets/13d.svg";
import d50 from "../assets/50d.svg";
import n1 from "../assets/01n.svg";
import n2 from "../assets/02n.svg";
import n3 from "../assets/03n.svg";
import n4 from "../assets/04n.svg";
import n9 from "../assets/09n.svg";
import n10 from "../assets/10n.svg";
import n11 from "../assets/11n.svg";
import n13 from "../assets/13n.svg";
import n50 from "../assets/50n.svg";

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
