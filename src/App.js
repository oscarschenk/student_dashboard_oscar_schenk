import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { AppContext } from "./AppContext";
import Home from "./pages/Home";
import StudentOverviewPage from "./pages/StudentOverviewPage";

function App() {
  const { theme, screenSize } = useContext(AppContext);

  return (
    <div className={`${theme} bg-sky-100 h-auto font-sans lg:h-screen`}>
      <Switch>
        <Route exact path={"/"}>
          {screenSize < 1024 ? <Redirect to="/student/Evelyn" /> : <Home />}
        </Route>
        <Route path={"/student/:firstName"} component={StudentOverviewPage} />
      </Switch>
    </div>
  );
}

export default App;

// This app is created with ReactJS, Tailwind CSS, Recharts and React Router. State is managed using Context. I want to focus on learning Test Driven Development, TypeScript, Vue.js, UX Design, Python and anything else I come across that can help me further develop myself as a programmer.
