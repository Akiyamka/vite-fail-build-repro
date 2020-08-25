import { ConnectedWeather } from "./weather-component";
import { getWeatherModule } from "./weather-module";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";
import * as React from "react";

export default function Dynamic() {
  return (
    <DynamicModuleLoader modules={[getWeatherModule()]}>
      <ConnectedWeather />
    </DynamicModuleLoader>
  );
}