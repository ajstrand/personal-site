/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Helmet } from "react-helmet";
import { useReducer } from "preact/hooks";
import CreateEl from "../CreateEl.js";
import { Flex } from "../components/componentsList.js";

//Code  credit to @chrisbiscardi for the initial design/structure

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
  <div
    css={{
      gridColumn: "span 2",
      "@media (min-width: 700px)": {
        gridColumn: "span 8",
      },
      "& ul": {
        marginLeft: "1rem",
      },
      marginTop: "1rem",
    }}
  >
    <ul css={{ listStyleType: "none", margin: 0, padding: 0 }}>
      {props.children}
    </ul>
  </div>
);

const ListItem = ({ to, contentType, children }) => {
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
    width: 100%;
    @media screen and (max-width: 30em) {
      padding: 15px;
    }
  `;
  return <section obj={style} {...props}></section>;
};

const Search = ({ filterDispatch }) => {
  return (
    <div css={{ gridColumn: "span 2" }}>
      <label for="posts-search">Search for a post or note</label>
      <input
        id="posts-search"
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
            //TODO: something fun
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
          .filter(({ meta }) => {
            const currentTags = meta.tags === undefined ? [] : meta.tags;
            if (filterState.tags.length === 0) {
              return true;
            }
            return filterState.tags.some((tag) => {
              let lower = currentTags.map((tagLocal) => tagLocal.toLowerCase());
              let doesInclude = lower.includes(tag.toLowerCase());
              return doesInclude;
            });
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
              <ListItem
                to={`/posts/${slug}`}
                key={id}
                contentType={contentType}
              >
                {title}
              </ListItem>
            );
          })
      ) : (
        <p>No posts to return.</p>
      )}
    </List>
  );
};

const PostTags = ({ posts, filterDispatch, filterState }) => {
  return (
    <ul
      css={{
        display: "flex",
        "& li": {
          margin: "0.5rem",
        },
        gridColumn: "span 3",
        "@media (min-width: 700px)": {
          gridColumn: "span 8",
        },
        flexWrap: "wrap",
        listStyleType: "none",
        marginTop: "2rem",
      }}
    >
      {posts ? (
        Array.from(
          new Set(
            posts
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
                color: filterState.tags.includes(value) ? "#eef1f7" : "#10151e",
                "&:focus": {
                  //TODO: add fun effect
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
        <p>No post tags seem to exist</p>
      )}
    </ul>
  );
};

const PageSubHeader = () => {
  return (
    <h1
      css={{
        fontWeight: 600,
        gridColumn: "span 2",
        "@media (min-width: 700px)": {
          gridColumn: "span 4",
        },
        marginTop: "3rem",
        fontSize: "48px",
      }}
    >
      Digital Garden{" "}
      <a href="https://joelhooks.com/digital-garden" css={{ fontSize: 16 }}>
        What is this?
      </a>
    </h1>
  );
};

export default ({ children, ...props }) => {
  const [filterState, filterDispatch] = useReducer(reducer, initialState);
  return (
    <Item
      css={{
        display: "grid",
        gridGap: "1rem",
        justifyContent: "center",
        //gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      }}
    >
      <Meta />
      <PageSubHeader />
      <PostTags
        posts={props.posts}
        filterDispatch={filterDispatch}
        filterState={filterState}
      />
      <Search filterDispatch={filterDispatch} />
      <ListWrapper posts={props.posts} filterState={filterState} />
    </Item>
  );
};
