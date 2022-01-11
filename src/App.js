import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { IoLeaf } from "react-icons/io5";
import Indicator from "./components/Indicator";
import UserDetails from "./containers/UserDetails";
import Workspace from "./containers/Workspace";
import UserBase from "./containers/UserBase";
import Congratulation from "./containers/Congratulation";
import { UserContext } from './context/userContext';
import "./App.css";

function App() {
  const [steps] = useContext(UserContext);

  return (
    <main className="App">
      <section className="app__container">
        <h2 className="app__head-title">
          <IoLeaf className="logo" />
          Eden
        </h2>
        <Indicator stepsLength={4} completedTill={steps} />
        <Switch>
          <Route exact path="/" component={UserDetails} />
          <Route exact path="/workspace" component={Workspace} />
          <Route exact path="/user-base" component={UserBase} />
          <Route exact path="/completed" component={Congratulation} />
        </Switch>
      </section>
    </main>
  );
}

export default App;
