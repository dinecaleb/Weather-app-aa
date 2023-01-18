import { Skeleton } from "@mui/material";
import React from "react";

class WeatherLoading extends React.Component {
  render() {
    return <div className="w-full">
      <Skeleton variant="rectangular" height={400} />
    </div>;
  }
}

export default WeatherLoading;
