import React, { useState } from "react";
import "./App.css";
// import ComponentA from "./components/UserContext/ComponentA";
// import ComponentB from "./components/UserContext/ComponentB";
import Landing from "./components/ThemeContext/Landing";
import { ThemeContextProvider } from "./components/ThemeContext/themeContext";
// export const UserContext = React.createContext();

function App() {
  // const [user, setUser] = useState("aakashsr");
  return (
    <div className="App">
      {/* <UserContext.Provider value={{user,setUser}}>
        <ComponentA />
      </UserContext.Provider> */}
      <ThemeContextProvider>
        <Landing />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
