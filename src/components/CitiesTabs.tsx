import React from "react";
import { fetchWeatherByCity } from "../api/weather";
import { WeatherDay } from "../api/weather.model";

interface CitiesTabsStateProps {
  selected: string;
}

interface CitiesTabsProps {
  setDays: (days: WeatherDay[],currentConditions:WeatherDay) => void;
  setLoading: (loading: boolean) => void;
}

class CitiesTabs extends React.Component<
  CitiesTabsProps,
  CitiesTabsStateProps
> {
  constructor(props: any) {
    super(props);
    this.state = { selected: "Ottawa" };
  }

  componentDidMount() {
    this.selectCity(this.state.selected);
  }

  ///fetch data on select
  selectCity = async (city: string) => {
    this.props.setLoading(true);
    this.setState({ selected: city });
    const cityData = await fetchWeatherByCity(city);
    const days = cityData?.days;
    const currentConditions = cityData?.currentConditions;
    this.props.setDays(days,currentConditions);
    this.props.setLoading(false);
  };

  render() {
    const cities = ["Ottawa", "London", "Dubai"];
    const selected = this.state.selected;

    return (
      <div className="">
        <div className="flex mb-8 justify-center gap-12 ">
          {cities.map((city, index) => {
            return (
              <p
                onClick={() => this.selectCity(city)}
                key={index + "city"}
                className={`${
                  selected === city
                    ? "text-highlight font-bold"
                    : "font-extralight"
                } uppercase text-2xl   cursor-pointer`}
              >
                {city}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CitiesTabs;
