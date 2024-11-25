import { gql, useQuery } from "@urql/preact";

const Loading = () => <div>Loading...</div>;

const Empty = () => <div>No posts yet!</div>;

const Failure = ({ error }) => <div>Error loading data: {error.message}</div>;

const Success = ({ posts }) => {
  return posts.map((post) => (
    <article>
      <h2>{post.title}</h2>
      <div>{post.body}</div>
    </article>
  ));
};

const isEmpty = (data) => {
  return data === null || data.length === 0;
};
const CreateCell = ({ queryToRun, Comp }) => {
  const quiz = gql`
    query TestQuery {
      answer
    }
  `;
  const doc = gql`
    query ListPosts {
      posts {
        title
      }
    }
  `;
  // let x = gql`
  //   ${queryToRun}
  // `;
  const [result, reexecuteQuery] = useQuery({
    query: quiz,
  });

  const { data, loading, error } = result;

  if (error) {
    console.log("error", error);
    return <Failure error={error} />;
  }
  if (loading) {
    console.log("loading", loading);
  }

  if (data) {
    console.log("data", data);

    return <Comp {...props} {...data} />;
  }
};

// const FakeApp = ({ children }) => {
//   return <div className="uniqueClassForTest">{children}</div>;
// };

export { CreateCell };
