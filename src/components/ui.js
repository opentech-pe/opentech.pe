/** @jsx jsx */
import { jsx } from "@emotion/core";

function Header({ styles, ...props }) {
  return (
    <header
      {...props}
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "15vh",
        margin: "0 60px",
        "@media (max-width: 768px)": {
          margin: "0 10px"
        },
        ...styles
      }}
    />
  );
}

function Logo({ styles, ...props }) {
  return (
    <h1
      {...props}
      css={{
        a: {
          textDecoration: "none",
          color: "currentColor",
          span: {
            color: "#3498DB"
          }
        },
        fontSize: 24,
        "@media (max-width: 768px)": {
          fontSize: 18
        },
        ...styles
      }}
    >
      {props.children}
    </h1>
  );
}

function Nav({ styles, ...props }) {
  return (
    <nav
      {...props}
      css={{
        overflow: "auto",
        height: "100%",
        ul: {
          display: "flex",
          alignItems: " center",
          height: "100%",
          margin: "0",
          padding: "0",
          listStyle: "none",
          color: "#000",
          li: {
            width: "140px",
            margin: "0 15px",
            fontSize: "12px",
            textAlign: "center",
            "@media (max-width: 768px)": {
              fontSize: "10px"
            }
          },
          a: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: "15px",
            textDecoration: "none",
            transition: "all 0.25s ease-in-out",
            color: "#000",
            img: {
              height: 30,
              width: 30,
              marginBottom: 5,
              marginRight: 5
            },
            "&:hover": {
              borderBottom: "2px solid currentColor"
            }
          }
        },
        ...styles
      }}
    />
  );
}

export { Header, Logo, Nav };
