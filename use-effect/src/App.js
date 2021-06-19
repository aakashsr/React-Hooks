import "./App.css";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
// import ClassInputCounter from "./components/ClassInputCounter";
// import HookInputCounter from "./components/HookInputCounter";
// import ClassMouse from './components/ClassMouse';
// import MouseContainer from "./components/MouseContainer";
import InterverClassCounter from "./components/InterverClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <ClassInputCounter /> */}
      {/* <ClassMouse /> */}
      <InterverClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
