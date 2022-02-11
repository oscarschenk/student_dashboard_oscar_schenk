import React from "react";
import { Switch, Route, Link, useParams } from "react-router-dom";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import StudentOverviewPage from "./pages/StudentOverviewPage";

function App() {
  return (
    <div className="bg-gray-100  font-sans w-full h-full">
      <header className="bg-blue-500 h-12 shadow-2xl px-32 mb-12 text-white flex items-center">
        <nav className="">
          <Link to="/">Home</Link>
        </nav>
      </header>
      <div className="flex flex-col items-center">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/student/:firstName" component={StudentOverviewPage} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
