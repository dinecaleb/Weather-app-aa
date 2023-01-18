import React from "react";
import { WeatherDay } from "../api/weather.model";
import { ToLocalDate } from "../utils/weather";

interface WeatherForecastProps {
  days: WeatherDay[];
}

const images = require.context("../assets/icons", true);

class WeatherForecast extends React.Component<WeatherForecastProps, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { days } = this.props;

    return (
      <div className="">
        {days && (
          <div className="border-t-4  border-white grid grid-cols-4  ">
            {days.slice(1, 5).map((item, index) => {
              const date = ToLocalDate(item.datetimeEpoch);
              const dayOfWeek = date.toLocaleDateString("en-US", {
                weekday: "short",
              });

              const icon = images(`./${item.icon}.png`);
              const temp = Math.round(item.temp) + "º";

              return (
                <div
                  className={
                    index === 3 ? "p-6" : `p-6 border-r-4 border-white`
                  }
                  key={"day" + index}
                >
                  <div className="font-extralight text-xl mb-3">
                    {dayOfWeek}
                  </div>
                  <div className="mb-3">
                    <img  alt="weatherIcon" src={icon} className="m-auto" />
                  </div>
                  <div className="font-medium  text-xl">{temp}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default WeatherForecast;
