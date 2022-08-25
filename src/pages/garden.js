/** @jsx h */
import { h } from "preact";

import { Helmet } from "react-helmet";
import { useReducer } from "preact/hooks";
import { setup, css } from "goober";
import { useTheme } from "../components/theme.js";
import { Flex } from "../components/componentsList.js";

setup(h, undefined, useTheme);

//Code credit to @chrisbiscardi for the initial design/structure

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

const List = ({ title, subtitle, secondary, ...props }) => {
  const itemStyle = css`
    margin-left: 1rem;
    @media (min-width: 700px) : {
      margin-left: 0;
    }
    width: 100%;
    list-style-type: none;
    margin-top: 1rem;
  `;
  return (
    <Flex className={itemStyle} flexDirection="column" alignItems="flex-start">
      <ul>{props.children}</ul>
    </Flex>
  );
};

const ListItem = ({ to, contentType, children }) => {
  const itemStyle = css`
    color: #2d3747;
    display: flex;
    border-radius: 16px;
    text-decoration: none;
    &:hover,&:focus: {
      background-color: red;
    }
    padding: 1rem;
    margin: "0 -1rem";
    border-left: ${contentType === "blog-post" || contentType === "post"
      ? "3px solid #3981fe"
      : "none"};
  `;
  return (
    <li>
      <a to={to} href={to} className={itemStyle}>
        <span
          className={css`
            margin-left: "10px";
          `}
        >
          {children}
        </span>
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
  return <section className={style} {...props}></section>;
};

const Search = ({ filterDispatch }) => {
  return (
    <div
      className={css`
        grid-column: span 2;
        padding-left: 10px;
        padding-right: 10px;
      `}
    >
      <label for="posts-search">Search for a post or note</label>
      <input
        id="posts-search"
        placeholder="Type here to filter posts..."
        onChange={(e) => {
          filterDispatch({ type: "filterBy", payload: e.target.value });
        }}
        className={css`
          width: 100%;
          padding: 16px;
          flex: 1;
          font-size: 16px;
          border: 1px solid #2f3542;
          border-radius: 10px;
          color: #10151e;
        `}
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
          className={css`
            text-decoration: none;
            margin-bottom: 2px;
            align-self: flex-end;
            & :hover: {
              text-decoration: underline;
            }
            & :focus: {
              background-color: red;
            }
          `}
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
  const itemStyle = css`
    display: flex;
    & li: {
      margin: 0.5rem;
    }
    flex-wrap: wrap;
    list-style-type: none;
    margin-top: 2rem;
  `;
  return (
    <ul className={itemStyle}>
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
              className={css`
                padding: 10px 16px;
                background-color: ${filterState.tags.includes(value)
                  ? "#3981fe"
                  : "#ffdead"};
                color: ${filterState.tags.includes(value)
                  ? "#eef1f7"
                  : "#10151e"};
                "&:focus": {
                }
              `}
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
  const itemStyle = css`
  font-weight: 600;
  grid-column: "span 2";
  @media (min-width: 700px): {
    grid-column: span 4;
  },
  margin-top: 3rem;
  font-size: 48px;
`;
  const link = "https://joelhooks.com/digital-garden";
  const linkStyle = css`
    font-size: 1rem;
  `;
  return (
    <span>
      <h1 className={itemStyle}>Digital Garden </h1>
      <a href={link} className={linkStyle}>
        What is this?
      </a>
    </span>
  );
};

export default ({ children, ...props }) => {
  const theme = useTheme();
  const [filterState, filterDispatch] = useReducer(reducer, initialState);
  return (
    <Item
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
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
