import React from "react";

function One() {
  console.clear();
  console.log("%c ", process.env.REACT_APP_ONE_STYLE.split(";").join(";"));
  console.log(process.env.REACT_APP_ONE);
  return "";
}

export { One };
