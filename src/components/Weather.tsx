import React from "react";
import { WeatherDay } from "../api/weather.model";
import CitiesTabs from "./CitiesTabs";
import WeatherForecast from "./WeatherForecast";
import WeatherLoading from "./WeatherLoading";

interface WeatherProps {
  days: WeatherDay[];
  loading: boolean;
  mounted: boolean;
}
const images = require.context("../assets/icons", true);

class Weather extends React.Component<{}, WeatherProps> {
  constructor(props: any) {
    super(props);
    this.state = { days: [], loading: false, mounted: false };
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }

  setDays = (days: WeatherDay[]) => {
    this.setState({ days: days });
  };

  setLoading = (loading: boolean) => {
    this.setState({ loading: loading });
  };

  render() {
    const { days, loading } = this.state;
    const hasData = days.length > 0;
    const today = hasData ? days[0] : null;
    const todayIcon = today ? images(`./${today?.icon}.png`) : null;
    const todayTemp = today ? Math.round(today?.temp) + "º" : "";
    const todayCondition = today ? today?.conditions : "";

    return (
      <div className="">
        <CitiesTabs setDays={this.setDays} setLoading={this.setLoading} />

        {loading && !this.state.mounted && <WeatherLoading />}
        {hasData && (
          <div className="border-4 shadow-xl rounded-xl border-white  text-center">
            <div className="p-8 ">
              <div className="font-light text-2xl mb-3">Today</div>
              <div className="inline-flex mt-3 ">
                <div className="text-right">
                  <img
                    alt="weatherIcon"
                    src={todayIcon}
                    className="m-auto -mt-5 h-[100px]"
                  />
                </div>
                <div className="text-left pl-5 w-[60%]">
                  <div className="font-bold  text-5xl">{todayTemp}</div>
                  <div className="font-light text-xl">{todayCondition}</div>
                </div>
              </div>
            </div>

            <WeatherForecast days={this.state.days} />
          </div>
        )}
      </div>
    );
  }
}

export default Weather;
