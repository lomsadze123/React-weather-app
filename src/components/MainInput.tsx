import styled from "styled-components";
import Weather from "./Weather";
import Date from "./Date";
import WeatherFeatures from "./WeatherFeatures";
import Units from "./Units";
import axios from "axios";
import { useEffect, useState } from "react";
import DATA from "./ForTypes";

type DATATypes = typeof DATA;

const MainInput = () => {
  const [input, setInput] = useState<DATATypes | null>(null);

  const weatherAPI = async (city = "tbilisi", unit = "metric") => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bfd0148b33115682f5dd67eaad4292b1&units=${unit}`
      );
      const data = response.data;
      setInput(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    weatherAPI();
  }, []);

  return (
    <Div>
      <Weather
        name={input?.name ?? ""}
        country={input?.sys.country ?? ""}
        description={input?.weather[0].description ?? ""}
        temp={input?.main.temp ?? 0}
        feels_like={input?.main.feels_like ?? 0}
      />
      <div className="padding">
        <div className="vertical">
          <Date />
          <form>
            <input type="text" placeholder="Search a city..." />
          </form>
        </div>
        <WeatherFeatures
          humidityNumber={input?.main.humidity ?? 0}
          windSpeed={input?.wind.speed ?? 0}
          windDirection={input?.wind.deg ?? 0}
          visibility={(input && input?.visibility / 1000) ?? 0}
          rise={input?.sys.sunrise ?? 0}
          set={input?.sys.sunset ?? 0}
        />
        <Units />
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
    border: 0;
    padding: 1rem;
  }

  .vertical {
    gap: 2rem;
    display: flex;
    flex-direction: column;
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
