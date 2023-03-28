import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import Form from "./components/Form/Index";
import Input from "./components/Input";
import List from "./components/List/List";
import { useFetch } from "./utils";
import Conditions from "./components/Conditions/Conditions";

function App() {
  // clear local storage
  // localStorage.clear();

  const weatherData = useFetch("https://example-apis.vercel.app/api/weather");
  console.log("weatherData:", weatherData);

  const [isGoodWeather, setIsGoodWeather] = useState(
    weatherData?.isGoodWeather
  );
  const [condition, setCondition] = useState(weatherData?.condition);
  const [location, setLocation] = useState(weatherData?.location);
  const [temperature, setTemperature] = useState(weatherData?.temperature);

  useEffect(() => {
    setIsGoodWeather(weatherData?.isGoodWeather);
    setCondition(weatherData?.condition);
    setLocation(weatherData?.location);
    setTemperature(weatherData?.temperature);
  }, [weatherData]);

  let conditionLabel =
    condition === "🌧️"
      ? "rainy"
      : condition === "⛈️"
      ? "stormy"
      : condition === "🌤️"
      ? "wee bit cloudy"
      : condition === "☁️"
      ? "cloudy"
      : condition === "🌨️"
      ? "snowy"
      : "";

  const [activities, setActivities] = useLocalStorageState("userActivities", {
    defaultValue: [],
  });

  const goodWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather
  );

  const badWeatherActivities = activities.filter(
    (activity) => !activity.isForGoodWeather
  );

  function handleAddActivity(newActivity) {
    console.log("newActivity in App/handleAddActivity", newActivity);

    const newActivityObject = {
      id: uuid(),
      name: newActivity.name,
      isForGoodWeather: newActivity.isForGoodWeather,
    };
    setActivities([...activities, newActivityObject]);
    console.log("activities after:", activities);
  }

  console.log("isGoodWeather:", isGoodWeather);

  return (
    <div className="App">
      <Conditions
        emoji={condition}
        emojiLabel={conditionLabel}
        temperature={temperature}
      />
      <List
        activities={
          isGoodWeather ? goodWeatherActivities : badWeatherActivities
        }
        headline={
          isGoodWeather
            ? `The weather in ${location} is great!`
            : `The weather in ${location} blows!`
        }
      />
      <Form title="Add a new activity" onAddActivity={handleAddActivity}>
        <Input
          name="name"
          label="Name"
          type="text"
          placeholder="Bike-riding 🚲"
        />
        <Input
          name="isForGoodWeather"
          label="Good-weather activity"
          type="checkbox"
        />
      </Form>
    </div>
  );
}

export default App;
