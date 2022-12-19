import { info } from "autoprefixer";

const BASE_URL1 = "https://api.api-ninjas.com";
const BASE_URL2 = "https://api.brightsky.dev";
const XApiKey = "a2OGHdyD19BSWTAvzwLz9w==o4xI0wy0HpJhur5g";

//const url1 = `https://api.api-ninjas.com/v1/geocoding?city=${location}&country=Germany`;

//const url2 = `https://api.brightsky.dev/weather?lat=${lat}&lon=${lon}&date=${date}`; //date=2022-12-09

const getCoordinates = (infoType, searchParams) => {
  const url = new URL(BASE_URL1 + "/v1/" + infoType);
  url.search = new URLSearchParams({ ...searchParams });

  return fetch(url, { headers: { "X-Api-Key": XApiKey } }).then((res) =>
    res.json()
  );
};

const formatCoordinates = (data) => {
  const {
    0: { latitude, longitude },
  } = data;

  return { latitude, longitude };
};

const getFormattedCoordinateData = async (searchParams) => {
  const formattedCoordinateData = await getCoordinates(
    "geocoding",
    searchParams
  ).then(formatCoordinates);

  return formattedCoordinateData;
};

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL2 + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams });

  return fetch(url).then((res) => res.json().then((data) => data));
};

const formatCurrentWeather = (data) => {
  const { weather, sources } = data;

  //const array1 = [4, 8, 12, 16, 20];

  const {
    timestamp,
    precipitation,
    pressure_msl,
    sunshine,
    temperature,
    wind_direction,
    wind_speed,
    cloud_cover,
    dew_point,
    relative_humidity,
    visibility,
    condition,
    icon,
  } = weather[0];

  const { station_name } = sources[0];

  return {
    0: {
      timestamp,
      precipitation,
      pressure_msl,
      sunshine,
      temperature,
      wind_direction,
      wind_speed,
      cloud_cover,
      dew_point,
      relative_humidity,
      visibility,
      condition,
      icon,
      station_name,
    },
  };
};

const formatForecastWeather = (data) => {
  let { weather } = data;
  weather = weather[1].map((w) => {
    return {
      time: w.weather[1].timestamp,
    };
  });

  return weather;
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return formattedCurrentWeather;
};

export { getFormattedCoordinateData, getFormattedWeatherData };
