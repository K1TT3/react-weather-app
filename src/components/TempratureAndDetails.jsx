import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TempratureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Wolkig</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">-7°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Gefühlt:
            <span className="font-medium ml-1">-8°</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Luftfeuchtigkeit:
            <span className="font-medium ml-1">10%</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Windgeschwindigkeit:
            <span className="font-medium ml-1">9 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Aufgang: <span className="font-medium ml-1">6:45</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Untergang: <span className="font-medium ml-1">16:35</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowUp />
        <p className="font-light">
          Max: <span className="font-medium ml-1">-2°</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowDown />
        <p className="font-light">
          Min: <span className="font-medium ml-1">-9°</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default TempratureAndDetails;
