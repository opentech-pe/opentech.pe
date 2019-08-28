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

export { Center };
