/** @jsx jsx */
import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Global, jsx } from "@emotion/core";

import Home from "./views/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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
      <Navbar />
      <Router>
        <Home path="/" />
      </Router>
      <Footer />
    </>
  );
}

render(<App />, document.getElementById("root"));
