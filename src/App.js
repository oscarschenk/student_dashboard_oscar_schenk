import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import StudentOverviewPage from "./pages/StudentOverviewPage";

function App() {
  return (
    <div className="bg-blue-500 h-screen font-sans">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/student/:firstName" component={StudentOverviewPage} />
      </Switch>
    </div>
  );
}

export default App;
