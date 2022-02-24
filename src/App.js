import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AppContext } from "./AppContext";
import Home from "./pages/Home";
import StudentOverviewPage from "./pages/StudentOverviewPage";

function App() {
  const { theme, screenSize } = useContext(AppContext);

  return (
    <div className={`${theme} bg-sky-200 md:h-screen h-full font-sans`}>
      <Switch>
        <Route exact path={"/"}>
          {screenSize <= 767 ? <Redirect to="/student/Evelyn" /> : <Home />}
        </Route>
        <Route path={"/student/:firstName"} component={StudentOverviewPage} />
      </Switch>
    </div>
  );
}

export default App;
