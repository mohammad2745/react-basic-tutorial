import Clock from "./Clock";

function ClockList({quantities = []}) {
  if (!Array.isArray(quantities)) {
    console.error("quantities must be an array");
    return null;
  }

  return (
    <div>
      {quantities.map((clock) => (
        <Clock key={clock} />
      ))}
    </div>
  );
}

export default ClockList;