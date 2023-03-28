import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import { v4 as uuid } from "uuid";
import Form from "./components/Form/Index";
import Input from "./components/Input";
import List from "./components/List/List";

function App() {
  const isGoodWeather = false;

  const [activities, setActivities] = useLocalStorageState("userActivities", {
    defaultValue: [],
  });
  const [filter, setFilter] = useLocalStorageState("activityFilter", {
    defaultValue: isGoodWeather,
  });

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

  const goodWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather
  );

  const badWeatherActivities = activities.filter(
    (activity) => !activity.isForGoodWeather
  );

  return (
    <div className="App">
      <List
        activities={
          isGoodWeather ? goodWeatherActivities : badWeatherActivities
        }
        headline={isGoodWeather ? "The weather's great!" : "The weather blows!"}
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
