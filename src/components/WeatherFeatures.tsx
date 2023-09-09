import styled from "styled-components";
import humidity from "../assets/humidity.png";
import binocular from "../assets/binocular.png";
import compass from "../assets/compass.png";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";
import wind from "../assets/wind.png";

interface Types {
  humidityNumber: number;
  windSpeed: number;
  windDirection: number;
  visibility: string;
  rise: number;
  set: number;
  unit: string;
}

const WeatherFeatures = ({
  humidityNumber,
  windSpeed,
  windDirection,
  visibility,
  rise,
  set,
  unit,
}: Types) => {
  const compassSector = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
  ];
  const newDirection = compassSector[Math.floor(windDirection / 22.5)];

  const newRise = new Date(rise * 1000);
  const riseDate = `${newRise.getHours()}:${newRise.getMinutes()}`;

  const newSet = new Date(set * 1000);
  const setDate = `${newSet.getHours()}:${newSet.getMinutes()}`;

  const [hours, minutes] = setDate.split(":");
  const formattedHour = (parseInt(hours) % 12 || 12).toString();
  const formatTime = `${formattedHour}:${minutes}`;

  return (
    <MainDiv>
      <FeaturesComponent
        title="Humidity"
        img={humidity}
        feature={humidityNumber}
        unit="%"
      />
      <FeaturesComponent
        title="Wind speed"
        img={wind}
        feature={windSpeed}
        unit={unit === "metric" ? "m/s" : "m/h"}
      />
      <FeaturesComponent
        title="Wind direction"
        img={compass}
        feature={newDirection}
      />
      <FeaturesComponent
        title="Visibility"
        img={binocular}
        feature={
          unit === "metric"
            ? visibility
            : (parseFloat(visibility) / 1.60934).toFixed(1)
        }
        unit={unit === "metric" ? "km" : "miles"}
      />
      <FeaturesComponent
        title="Sunrise"
        img={sunrise}
        feature={riseDate}
        unit={unit === "metric" ? "" : "AM"}
      />
      <FeaturesComponent
        title="Sunset"
        img={sunset}
        feature={unit === "metric" ? setDate : formatTime}
        unit={unit === "metric" ? "" : "PM"}
      />
    </MainDiv>
  );
};

interface Weather {
  title: string;
  img: string;
  feature: number | string;
  unit?: string;
}

const FeaturesComponent = ({ title, img, feature, unit }: Weather) => {
  return (
    <Div>
      <p>{title}</p>
      <div className="flex">
        <img src={img} alt={title} />
        <div>
          <h2>{feature}</h2>
          <p>{unit}</p>
        </div>
      </div>
    </Div>
  );
};

export default WeatherFeatures;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 476px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 951px) {
    max-width: 74rem;
    div img {
      width: 52%;
    }
  }
`;

const Div = styled.div`
  background-color: hsla(0, 0%, 100%, 0.95);
  padding: 2rem;
  border-radius: 2rem;
  p {
    font-size: 1.6rem;
    text-align: right;
  }
  h2 {
    font-size: 3.2rem;
  }
  img {
    max-width: 10rem;
    width: 100%;
    height: auto;
  }
  .flex {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 476px) {
    width: 47%;
    img {
      width: 40%;
    }
  }

  @media (min-width: 601px) {
    width: 30%;
    h2 {
      font-size: 3.042rem;
    }
    img {
      width: 43%;
    }
  }
`;
