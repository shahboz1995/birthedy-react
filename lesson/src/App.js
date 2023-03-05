import { useState } from "react";
import List from "./components/List";
import { users } from "./data";
import {data} from "./data";
  import './App.css';
function App() {
  const [people, setPeople]= useState(data)
  return <div className='App'>
    <List arr={people} setPeople={setPeople}/>
  </div>
    
}

export default App;
