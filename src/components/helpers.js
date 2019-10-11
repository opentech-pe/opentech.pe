/** @jsx jsx */
import { jsx } from "@emotion/core";

function Center({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    />
  );
}

function SpaceAround({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    />
  );
}

function SpaceEvenly({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}
    />
  );
}

export { Center, SpaceAround, SpaceEvenly };
