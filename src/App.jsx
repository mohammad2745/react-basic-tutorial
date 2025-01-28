import Clock from "./components/Clock";
import ClockList from "./components/ClockList";

function App() {
  let quantities = [1, 2, 3];
  return (
    <div><ClockList quantities={quantities}/></div>
  )
}

export default App;
