import React from "react";

import Slogan from "../components/slogan";
import About from "../components/about";
import Venue from "../components/venue";
import Organizers from "../components/organizers";

function Home() {
  return (
    <>
      <Slogan />
      <About />
      <Venue />
      <Organizers />
    </>
  );
}

export default Home;
