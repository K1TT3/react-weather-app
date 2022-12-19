import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempratureAndDetails from "./components/TempratureAndDetails";
import Forecast from "./components/Forecast";
import {
  getFormattedCoordinateData,
  getFormattedWeatherData,
} from "./services/weatherService";

function App() {
  var coord = [];

  const fetchWeather = async () => {
    const data1 = await getFormattedCoordinateData({
      city: "berlin",
      country: "DE",
    });
    console.log(data1);
    coord[0] = data1.latitude;
    coord[1] = data1.longitude;

    const data2 = await getFormattedWeatherData({
      lat: coord[0],
      lon: coord[1],
      date: "2022-12-15",
    });
    console.log(data2);
  };

  //fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempratureAndDetails />

      <Forecast title="Stündliche Vorhersage" />
      <Forecast title="Tägliche Vorhersage" />
    </div>
  );
}

export default App;
