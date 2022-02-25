import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AppContext } from "./AppContext";
import Home from "./pages/Home";
import StudentOverviewPage from "./pages/StudentOverviewPage";

function App() {
  const { theme, screenSize } = useContext(AppContext);

  return (
    <div className={`${theme} bg-sky-100 lg:h-screen h-auto font-sans`}>
      <Switch>
        <Route exact path={"/"}>
          {screenSize < 768 ? <Redirect to="/student/Evelyn" /> : <Home />}
        </Route>
        <Route path={"/student/:firstName"} component={StudentOverviewPage} />
      </Switch>
    </div>
  );
}

export default App;
