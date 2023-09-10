import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className="App">
      <Navbar dark={dark} setDark={setDark} />
      <Banner dark={dark} />
      <Sections dark={dark} />
    </div>
  );
}

export default App;
