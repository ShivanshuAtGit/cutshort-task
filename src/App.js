import React, { useState } from "react";
import { IoLeaf } from "react-icons/io5";
import "./App.css";
import Indicator from "./components/Indicator";
import UserDetails from "./containers/UserDetails";

function App() {
  const [steps, setSteps] = useState(0);
  return (
    <main className="App">
      <section className="app__container">
        <h2 className="app__head-title">
          <IoLeaf className="logo" />
          Eden
        </h2>
        <Indicator stepsLength={4} completedTill={2} />
        <UserDetails />
      </section>
    </main>
  );
}

export default App;
