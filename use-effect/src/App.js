import "./App.css";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
// import ClassInputCounter from "./components/ClassInputCounter";
// import HookInputCounter from "./components/HookInputCounter";
// import ClassMouse from './components/ClassMouse';
// import MouseContainer from "./components/MouseContainer";
import InterverClassCounter from "./components/timer/InterverClassCounter";
import IntervalHookCounter from "./components/timer/IntervalHookCounter";
import ClassDataFetching from "./components/dataFetching/ClassDataFetching";
import HookDataFetching from "./components/dataFetching/HookDataFetching";
import HookDataFetchingonClick from "./components/dataFetchingonClick/HookDataFetchingonClick";
import ColourfulCounter from "./components/colorfulCounter/ColourfulCounter";

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <ClassInputCounter /> */}
      {/* <ClassMouse /> */}
      {/* <InterverClassCounter />
      <IntervalHookCounter /> */}
      {/* <ClassDataFetching /> */}
      {/* <HookDataFetching /> */}
      {/* <HookDataFetchingonClick /> */}
      <ColourfulCounter />
    </div>
  );
}
export default App;
