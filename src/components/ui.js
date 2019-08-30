/** @jsx jsx */
import { jsx } from "@emotion/core";

import { SpaceAround } from "./helpers";

function Bar({ styles, ...props }) {
  return (
    <div
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

function Sentence({ styles, ...props }) {
  return (
    <h2
      {...props}
      css={{
        textAlign: "center",
        maxWidth: 975,
        fontSize: "48px",
        lineHeight: "50px",
        "@media (max-width: 768px)": {
          fontSize: 18,
          lineHeight: "25px",
          margin: "15px 5px"
        },
        ...styles
      }}
    >
      {props.children}
    </h2>
  );
}

function SubTitle({ styles, ...props }) {
  return (
    <h2
      {...props}
      css={{
        fontSize: 30,
        textAlign: "center",
        lineHeight: "25px",
        color: "#3498DB",
        "@media (max-width: 768px)": {
          fontSize: 16
        },
        ...styles
      }}
    >
      {props.children}
    </h2>
  );
}

function Section({ styles, ...props }) {
  return (
    <section
      {...props}
      css={{
        padding: "5rem 1rem",
        section: {
          margin: "0 auto",
          maxWidth: "80rem"
        },
        span: {
          fontSize: 10,
          lineHeight: "20px",
          maxWidth: "600px",
          textAlign: "center",
          color: "#999"
        },
        ...styles
      }}
    />
  );
}

function Info({ styles, ...props }) {
  return (
    <SpaceAround
      {...props}
      css={{
        p: {
          maxWidth: 635
        },
        a: {
          color: "currentColor",
          textAlign: "center",
          lineHeight: "25px"
        },
        div: {
          ":first-of-type": {
            a: {
              marginTop: "30px"
            }
          },
          ":last-child": {
            a: {
              marginTop: "5px"
            }
          }
        },
        "@media (max-width: 768px)": {
          flexDirection: "column",
          a: {
            fontSize: 10,
            lineHeight: "25px"
          },
          div: {
            ":first-of-type": {
              a: {
                margin: "5px 0"
              }
            },
            ":last-child": {
              a: {
                margin: "5px 0"
              }
            }
          }
        },
        ...styles
      }}
    />
  );
}

function Organizer({ styles, ...props }) {
  return (
    <SpaceAround
      {...props}
      css={{
        marginTop: 30,
        textAlign: "end",
        h3: {
          marginBottom: 2
        },
        a: {
          textDecoration: "none",
          fontSize: 10,
          lineHeight: "20px",
          color: "#999",
          marginRight: 5
        },
        "a:hover": {
          color: "#3498DB"
        },
        "@media (max-width: 768px)": {
          margin: 0,
          marginTop: 10,
          flexDirection: "column",
          textAlign: "center",
          h3: {
            fontSize: 17
          }
        },
        ...styles
      }}
    />
  );
}

function Brand({ styles, ...props }) {
  return (
    <SpaceAround
      {...props}
      css={{
        marginTop: 30,
        a: {
          height: 200,
          width: 200,
          position: "relative"
        },
        img: {
          height: "100%",
          width: "100%",
          objectFit: "contain",
          position: "absolute",
          top: 0,
          left: 0
        },
        "@media (max-width: 768px)": {
          margin: 0,
          marginTop: 27,
          flexDirection: "column",
          a: {
            height: 150,
            width: 150
          }
        }
      }}
    />
  );
}

export { Bar, Logo, Nav, Sentence, SubTitle, Info, Organizer, Section, Brand };
