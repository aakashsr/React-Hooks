import React , {useState} from 'react'
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
export const UserContext = React.createContext();

function App() {
  const [user,setUser] = useState('aakashsr')
  return (
    <div className="App">
      <UserContext.Provider value={{user,setUser}}>
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
}

export default App;
