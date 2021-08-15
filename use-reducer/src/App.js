import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";
import Counter4 from "./components/Counter4";
import CompA from "./components/contextWithuseReducer/CompA";
import CompB from "./components/contextWithuseReducer/CompB";
import CompC from "./components/contextWithuseReducer/CompC";
import { useReducer } from "react";
import CountContext from "./Context/CountContext";
import DataFetchingOne from "./components/Datafetching/DataFetchingOne";
import DataFetchingTwo from "./components/Datafetching/DataFetchingTwo";

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };


function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
      <div className="App">
        {/* <h1>{count}</h1>
        <CompA />
        <CompB />
        <CompC /> */}
        {/* <DataFetchingOne /> */}
        <DataFetchingTwo />
      </div>
    // </CountContext.Provider>
  );
}

export default App;
