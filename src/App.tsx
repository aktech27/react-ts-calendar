import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <h1>Calendar App</h1>
      <div className="calendar-container">
        <Calendar date="3/7/2020" />
      </div>
    </div>
  );
}

export default App;
