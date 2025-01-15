import "./App.css";
import Card from "./components/Card";

function App() {
  const umangDetails = { info: "Never give up" };
  const umangHobbies = ["Cricket", "Chess"];
  return (
    <>
      <h1 className="bg-green-400 p-4 text-white rounded-xl">
        Hello Champion Umang
      </h1>
      <div className="flex">
        <Card username="Umang" details={umangDetails} hobbies={umangHobbies} />
        <Card username="Bhavin" />
      </div>
    </>
  );
}

export default App;
