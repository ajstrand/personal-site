/*Aside: (props) => (
    <div
      {...props}
      css={{
        gridColumn: 2,
        backgroundColor: "hsla(220, 26%, 18%, 1)",
        borderLeft: "2px solid rgba(51,183,255,.41)",
        padding: "1rem",
        paddingTop: 0,
        marginTop: "1rem",
        borderRight: "1px solid rgba(51,183,255,.41)",
      }}
    />
  ),
  hr: (props) => (
    <hr
      css={{
        height: "3px",
        marginTop: "2rem",
        border: "none",
        gridColumn: 2,
        background:
          "linear-gradient(90deg,rgba(251,89,74,1) 0%, rgba(251,89,74,1) 25%,rgba(251,222,75,1) 25%, rgba(251,222,75,1) 50%,rgba(112,228,112,1) 50%, rgba(112,228,112,1) 75%,rgba(51,183,255,1) 75%);",
      }}
    />
  ),
  p: (props) => (
    <p
      css={{
        gridColumn: 2,

        fontSize: "22px",
        lineHeight: "32px",
        padding: "0.05px 0",
        ":before": {
          content: "''",
          marginTop: "-0.3659090909090909em",
          display: "block",
          height: 0,
        },
        ":after": {
          content: "''",
          marginBottom: "-0.3659090909090909em",
          display: "block",
          height: 0,
        },
      }}
      {...props}
    />
  ),
  img: (props) => (
    <img css={{ gridColumn: 2, width: "100%" }} {...props} />
  ),
  a: (props) => (
    <a
      css={{
        wordWrap: "break-word",
        backgroundImage: `linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)`,
        "&[href^='/']": {
          backgroundImage: `linear-gradient(90deg, rgba(251,89,74,1) 0%, rgba(251,222,75,1) 25%, rgba(112,228,112,1) 50%, rgba(51,183,255,1) 75%)`,
        },
        "-webkit-background-clip": `text`,
        "-webkit-text-fill-color": `rgba(255,255,255,0.46)`,
        display: "inline-block",
        "&:hover": {
          "-webkit-text-fill-color": `rgba(255,255,255,.1)`,
        },
      }}
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      css={{
        gridColumn: 2,
        marginTop: `1rem`,
        marginLeft: `calc(1rem + 4px)`,
        lineHeight: 1.3,
      }}
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      css={{
        gridColumn: 2,
        marginTop: `1rem`,
        marginLeft: `calc(1rem + 4px)`,
        lineHeight: 1.3,
      }}
      {...props}
    />
  ),
  table: (props) => (
    <table css={{ gridColumn: 2, marginTop: "1rem" }} {...props} />
  ),
  thead: (props) => (
    <thead css={{ background: "#ffffff12" }} {...props} />
  ),
  th: (props) => (
    <th css={{ padding: ".5rem", textAlign: "left" }} {...props} />
  ),
  td: (props) => (
    <td
      css={{ padding: ".5rem", borderBottom: "1px solid #ffffff22" }}
      {...props}
    />
  ),
  inlineCode: (props) => <code css={{ color: "#31b7fe" }} {...props} />,
  pre: (props) => {
    const lang =
      props.children.props.class &&
      props.children.props.class.split("-")[1];
    const langMap = {
      graphql: "GraphQL",
      js: "JS",
    };

    return (
      <div
        css={{
          gridColumn: 2,
          background: "#11151d",
          overflow: "auto",
          borderRadius: 10,
          position: "relative",
          border: "1px solid rgba(51,183,255,.21)",
          boxShadow: `inset 0 2.8px 2.2px rgba(0,0,0,0.02),
              inset 0 6.7px 5.3px rgba(0,0,0,0.028),
              inset 0 12.5px 10px rgba(0,0,0,0.035),
              inset 0 22.3px 17.9px rgba(0,0,0,0.042),
              inset 0 41.8px 33.4px rgba(0,0,0,0.05),
              inset 0 100px 80px rgba(0,0,0,0.07)`,
        }}
      >
        <div
          css={{
            fontSize: `12px`,
            display: `flex`,
            justifyContent: `space-between`,
            position: `sticky`,
            left: 0,
            borderBottom: "1px solid rgba(51,183,255,.21)",
          }}
        >
          <span css={{ padding: "1rem" }}>
            {props.children.props.title}
          </span>
          <div css={{ display: "flex" }}>
            <span css={{ padding: "1rem" }}>
              {langMap[lang] || lang || ""}
            </span>
          </div>
        </div>
        <div
          css={{ padding: "1rem 2rem" }}
          dangerouslySetInnerHTML={{
            __html: props.children.props.children,
          }}
        />
      </div>
    );
  },
  blockquote: (props) => (
    <blockquote
      css={{
        gridColumn: 2,
        backgroundColor: "#1d2634",
        backgroundImage: `linear-gradient(180deg,rgba(251,89,74,.5) 0%,rgba(251,89,74,.5) 25%,rgba(251,222,75,.5) 25%,rgba(251,222,75,.5) 50%,rgba(112,228,112,.5) 50%,rgba(112,228,112,.5) 75%,rgba(51,183,255,.5) 75%)`,
        backgroundSize: "3px 100%",
        backgroundRepeat: "no-repeat",
        paddingLeft: "1rem",
        borderRight: `1px solid hsla(217, 28%, 26%, 1)`,
        paddingTop: `1rem`,
        paddingBottom: `1rem`,
        "&:hover": {
          backgroundImage: `linear-gradient(180deg,rgba(251,89,74,1) 0%, rgba(251,89,74,1) 25%,rgba(251,222,75,1) 25%, rgba(251,222,75,1) 50%,rgba(112,228,112,1) 50%, rgba(112,228,112,1) 75%,rgba(51,183,255,1) 75%)`,
        },
      }}
      {...props}
    />
  ),
  "blockquote.p": (props) => (
    <p
      css={{
        fontSize: "22px",
        lineHeight: "32px",
        padding: "0.05px 0",
        ":before": {
          content: "''",
          marginTop: "-0.3659090909090909em",
          display: "block",
          height: 0,
        },
        ":after": {
          content: "''",
          marginBottom: "-0.3659090909090909em",
          display: "block",
          height: 0,
        },
      }}
      {...props}
    />
  ),*/
