import styled from "styled-components";
import humidity from "../assets/humidity.png";
import binocular from "../assets/binocular.png";
import compass from "../assets/compass.png";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";
import wind from "../assets/wind.png";

const WeatherFeatures = () => {
  return (
    <MainDiv>
      <FeaturesComponent
        title="Humidity"
        img={humidity}
        feature="48"
        unit="%"
      />
      <FeaturesComponent
        title="Wind speed"
        img={wind}
        feature="9.77"
        unit="m/s"
      />
      <FeaturesComponent title="Wind direction" img={compass} feature="NW" />
      <FeaturesComponent
        title="Visibility"
        img={binocular}
        feature="10.0"
        unit="km"
      />
      <FeaturesComponent title="Sunrise" img={sunrise} feature="6:30" />
      <FeaturesComponent title="Sunset" img={sunset} feature="19:26" />
    </MainDiv>
  );
};

interface Weather {
  title: string;
  img: string;
  feature: string;
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
`;
