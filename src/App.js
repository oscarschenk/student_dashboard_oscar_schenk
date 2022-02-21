import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import StudentOverviewPage from "./pages/StudentOverviewPage";

function App() {
  const screenWidth = window.innerWidth;
  return (
    <div className="bg-blue-500 h-screen font-sans">
      <Switch>
        <Route exact path={"/"}>
          {screenWidth <= 760 ? <Redirect to="/student/Evelyn" /> : <Home />}
        </Route>
        <Route path={"/student/:firstName"} component={StudentOverviewPage} />
      </Switch>
    </div>
  );
}

export default App;
