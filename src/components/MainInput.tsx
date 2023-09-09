import styled from "styled-components";
import Weather from "./Weather";
import Dates from "./Date";
import WeatherFeatures from "./WeatherFeatures";
import axios from "axios";
import { useEffect, useState } from "react";
import DATA from "./ForTypes";
import Units from "./Units";

type DATATypes = typeof DATA;

const MainInput = () => {
  const [input, setInput] = useState<DATATypes | null>(null);
  const [unit, setUnit] = useState<string>("metric");
  const [city, setCity] = useState("tbilisi");
  const [currentCity, setCurrentCity] = useState<string>("tbilisi");
  const [check, setCheck] = useState(false);

  const switchFunction = (newUnit: string) => {
    setUnit(newUnit);
  };

  const weatherAPI = async (city: string) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bfd0148b33115682f5dd67eaad4292b1&units=${unit}`
      );
      const data = response.data;
      setInput(data);
      setCity("");
      setCheck(false);
    } catch (error) {
      console.log(error);
      setCheck(true);
    }
  };

  useEffect(() => {
    weatherAPI(currentCity);
  }, [unit]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city !== "") {
      weatherAPI(city);
      setCurrentCity(city);
      if (!check) {
        setCity("");
      }
    }
  };

  return (
    <Div>
      <Weather
        name={input?.name ?? ""}
        country={input?.sys.country ?? ""}
        description={input?.weather[0].description ?? ""}
        temp={input?.main.temp ?? 0}
        feels_like={input?.main.feels_like ?? 0}
        image={input?.weather[0].icon ?? ""}
        unit={unit}
      />
      <div className="padding">
        <div className="vertical">
          <Dates time={input?.dt ?? 0} unit={unit} />
          <form onSubmit={handleFormSubmit}>
            <Input
              border={check}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
              type="text"
              placeholder="Search a city..."
            />
            {check && <h3>No results</h3>}
          </form>
        </div>
        <WeatherFeatures
          humidityNumber={input?.main.humidity ?? 0}
          windSpeed={input?.wind.speed ?? 0}
          windDirection={input?.wind.deg ?? 0}
          visibility={
            input !== null ? (input.visibility / 1000).toFixed(1) : ""
          }
          rise={input?.sys.sunrise ?? 0}
          set={input?.sys.sunset ?? 0}
          unit={unit}
        />
        <Units newUnit={unit} setUnit={switchFunction} />
      </div>
    </Div>
  );
};

export default MainInput;

const Div = styled.div`
  max-width: 60rem;
  width: 100%;
  box-shadow: 0 8px 32px 0 rgba(83, 89, 179, 0.37);
  .padding {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #f7f7f7;
  }

  input {
    width: 100%;
    text-align: center;
    font-size: 1.8rem;
    border-radius: 1rem;
    outline: 0;
    padding: 1rem;
  }

  .vertical {
    gap: 2rem;
    display: flex;
    flex-direction: column;
  }

  form {
    position: relative;
  }

  form h3 {
    color: red;
    font-size: 1.5rem;
    position: absolute;
    top: 1.2rem;
    left: 1rem;
  }

  @media (min-width: 601px) {
    border-radius: 3rem;
    .vertical {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 0;
    }
    input {
      text-align: right;
    }
  }

  @media (min-width: 951px) {
    display: flex;
    max-width: 120rem;
  }
`;

const Input = styled.input<{ border: boolean }>`
  border: ${(props) => (props.border ? ".1rem solid red" : "0")};
  &:focus {
    border: ${(props) =>
      props.border ? ".1rem solid red" : "0.1rem solid gray"};
  }
`;
