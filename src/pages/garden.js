/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Helmet } from "react-helmet";
import { useReducer } from "preact/hooks";
import CreateEl from "../CreateEl.js";
import { Flex } from "../temp/componentsList.js";

const Meta = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Alex's posts</title>
      <meta name="twitter:title" content="Alex's posts" />
      <meta name="og:title" content="Alex's posts" />
      <meta
        name="description"
        content={"Posts about technical and sometimes non-technical topics"}
      />
      <meta
        name="twitter:description"
        content={"Posts about technical and sometimes non-technical topics"}
      />
    </Helmet>
  );
};

const List = ({ title, subtitle, secondary, ...props }) => (
  <div css={{ marginTop: "1rem", gridColumn: "2/4" }}>
    <ul css={{ listStyleType: "none", margin: 0, padding: 0 }}>
      {props.children}
    </ul>
  </div>
);

const ListItem = ({ to, logo, contentType, children }) => {
  return (
    <li>
      <a
        to={to}
        href={to}
        css={{
          color: "#2D3747",
          display: "flex",
          borderRadius: "16px",
          textDecoration: "none",
          "&:hover,&:focus": {
            //TODO: some cool focus thing
          },
          padding: "1rem",
          margin: "0 -1rem",
          borderLeft:
            contentType === "blog-post" || contentType === "post"
              ? "3px solid #3981fe"
              : "none",
        }}
      >
        <span css={{ marginLeft: "10px" }}>{children}</span>
      </a>
    </li>
  );
};

const initialState = {
  tags: [],
  filter: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "addTag":
      return { ...state, tags: state.tags.concat(action.payload) };
    case "removeTag":
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.payload),
      };
    case "filterBy":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      throw new Error("Unexpected action");
  }
};

const Item = (props) => {
  const style = css`
    padding: 0.5em;
    flex-direction: column;
    width: 100%;
    flex: 1;
    @media screen and (max-width: 30em) {
      padding: 15px;
    }
  `;
  return <CreateEl tag={Flex} obj={style} {...props}></CreateEl>;
};

const Search = ({ filterDispatch }) => {
  return (
    <div css={{ gridColumn: "2/4" }}>
      <input
        placeholder="Type here to filter posts..."
        onChange={(e) => {
          filterDispatch({ type: "filterBy", payload: e.target.value });
        }}
        css={{
          width: "100%",
          padding: "16px",
          flex: 1,
          fontSize: "16px",
          border: "1px solid #2f3542",
          borderRadius: "10px",
          color: "#10151e",
          "&:focus": {
            borderColor: "#3981fe",
            outline: "none",
          },
        }}
      />
    </div>
  );
};

const ListWrapper = ({ posts, filterState }) => {
  return (
    <List
      title="All Posts"
      secondary={
        <a
          to="/post"
          css={{
            textDecoration: "none",
            // margin is to align baseline with heading
            marginBottom: "2px",
            alignSelf: "flex-end",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          all posts
        </a>
      }
    >
      {posts ? (
        posts
          .filter(({ tags = [], ...etc }) => {
            if (filterState.tags.length === 0) {
              return true;
            }
            return filterState.tags.some((tag) =>
              tags.includes(tag.toLowerCase())
            );
          })
          .filter(({ meta }) => {
            return meta.title !== undefined
              ? meta.title
                  .toLowerCase()
                  .includes(filterState.filter.toLowerCase())
              : "nothing";
          })
          .sort((aPost, bPost) => {
            const a = new Date(aPost.updatedAt);
            const b = new Date(bPost.updatedAt);
            return a > b ? -1 : a < b ? 1 : 0;
          })
          .map(({ meta }) => {
            const { id, title, slug, tags, contentType } = meta;
            return (
              <ListItem to={slug} key={id} contentType={contentType}>
                {title}
              </ListItem>
            );
          })
      ) : (
        <p>there seems to be nothing here</p>
      )}
    </List>
  );
};

export default ({ children, ...props }) => {
  const [filterState, filterDispatch] = useReducer(reducer, initialState);
  return (
    <Item
      css={{
        display: "grid",
        gridGap: "1rem",
        gridTemplateColumns:
          "minmax(1.2rem, 1fr) minmax(auto, 400px) minmax(auto, 400px) minmax(1.2rem, 1fr)",
      }}
    >
      <Meta />
      <h1
        css={{
          fontWeight: 600,
          gridColumn: "2/4",
          marginTop: "3rem",
          fontSize: "48px",
        }}
      >
        Digital Garden{" "}
        <a href="/what-is-a-digital-garden" css={{ fontSize: 16 }}>
          What is this?
        </a>
      </h1>
      <ul
        css={{
          display: "flex",
          listStyleType: "none",
          gridColumn: "2/4",
          "& > li:not(:first-of-type)": {
            marginLeft: "1rem",
          },
          marginTop: "2rem",
        }}
      >
        {props.posts ? (
          Array.from(
            new Set(
              props.posts
                .map((v) => v.meta.tags)
                .filter((v) => !!v)
                .flat(Infinity)
            )
          ).map((value) => (
            <li>
              <button
                css={{
                  padding: "10px 16px",
                  backgroundColor: filterState.tags.includes(value)
                    ? "#3981fe"
                    : "#ffdead",
                  color: filterState.tags.includes(value)
                    ? "#eef1f7"
                    : "#10151e",
                  "&:focus": {
                    borderColor: "#3981fe",
                    outline: "none",
                  },
                }}
                onClick={() => {
                  if (filterState.tags.includes(value)) {
                    filterDispatch({ type: "removeTag", payload: value });
                  } else {
                    filterDispatch({ type: "addTag", payload: value });
                  }
                }}
              >
                {value}
              </button>
            </li>
          ))
        ) : (
          <p>there seems to be nothing here</p>
        )}
      </ul>
      <Search filterDispatch={filterDispatch} />
      <ListWrapper posts={props.posts} filterState={filterState} />
    </Item>
  );
};
