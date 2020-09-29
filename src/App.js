import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Stories from "./pages/Stories";
import NotFound from "./pages/NotFound";

import "./styles/css/main.css";
import Navbar from "./components/UI/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/features" component={Features} exact />
        <Route path="/pricing" component={Pricing} exact />
        <Route path="/stories" component={Stories} exact />
        <Route path="/*" component={NotFound} exact />
      </Switch>
      <h1>app</h1>
    </div>
  );
}

export default App;
