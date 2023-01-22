import ReduxExample from "./ReduxExample";

function App(props) {
  return (
    <div>
      <ReduxExample />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
