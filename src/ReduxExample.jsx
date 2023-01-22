import { Provider } from "react-redux";
import store from "./storage";
import RecordsReducer from "./RecordReducer";
import UseReducer from "./UseReducer";

export default function ReduxExample() {
 
  return (
    <Provider store={store}>
      <div>
        <p style={{ backgroundColor: "lightgray" }}>Redux Example2</p>
        <UseReducer />
      </div>
    </Provider>
  );
}
