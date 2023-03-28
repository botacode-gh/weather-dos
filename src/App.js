import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import { v4 as uuid } from "uuid";
import Form from "./components/Form/Index";
import Input from "./components/Input";

function App() {
  const [activities, setActivities] = useLocalStorageState("userActivities", {
    defaultValue: [],
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

  return (
    <div className="App">
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
