/** @jsx jsx */
import React from "react";
import ReactGA from "react-ga";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Global, jsx } from "@emotion/core";

import Home from "./views/home";
import CodeOfConduct from "./views/code-of-conduct";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { One } from "./components/no-review";

const global = {
  body: {
    margin: 0,
    fontFamily: "'Press Start 2P', cursive"
  }
};

function App() {
  return (
    <>
      <Global styles={global} />
      <One />
      <Navbar />
      <Router>
        <Home path="/" />
        <CodeOfConduct path="/code-of-conduct" />
      </Router>
      <Footer />
    </>
  );
}

render(<App />, document.getElementById("root"));

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY);
ReactGA.pageview(window.location.pathname + window.location.search);
