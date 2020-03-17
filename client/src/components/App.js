import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import ProfessionsPage from "./professions/ProfessionsPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import ManageProfessionPage from "./professions/ManageProfessionPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/professions" component={ProfessionsPage} />
        <Route path="/profession/:_key" component={ManageProfessionPage} />
        <Route path="/profession" component={ManageProfessionPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
export default App;
