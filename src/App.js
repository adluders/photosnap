import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Stories from "./pages/Stories";
import NotFound from "./pages/NotFound";

import "./styles/css/main.css";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import MobileNav from "./components/UI/MobileNav";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWidth = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="App">
      {windowWidth <= 375 ? <MobileNav /> : <Navbar />}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/features" component={Features} exact />
        <Route path="/pricing" component={Pricing} exact />
        <Route path="/stories" component={Stories} exact />
        <Route path="/*" component={NotFound} exact />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
