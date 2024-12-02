import { render, screen } from "@testing-library/preact";
import { describe, test, expect } from "vitest";

import { MockedGraphQLProvider } from "../mocks/mockedGraphql.jsx";

import { CreateCell } from "../src/createCell.jsx";

const getComponent = (Comp, query) => {
  const queryString = "query TestQuery { answer }";

  return render(
    <MockedGraphQLProvider>
      <CreateCell queryToRun={queryString} Comp={Comp} />
    </MockedGraphQLProvider>
  );
};

describe("createCell", () => {
  // test("Renders a static Success component", async () => {
  //   const Success = () => <p>Great success!</p>;

  //   getComponent(Success);
  //   const res = await screen.findByText(/Great success!/);
  //   expect(res).toBeInTheDocument();
  // });
  test("render with data", async () => {
    const Success = ({ answer }) => (
      <>
        <dl>
          <dt>What&apos;s the meaning of life?</dt>
          <dd>{answer}</dd>
        </dl>
      </>
    );
    const myData = {
      data: {
        answer: 42,
      },
    };
    getComponent(Success, myData);
    const res = await screen.findByText(/What's the meaning of life/);
    expect(res).toBeInTheDocument();
    const num = screen.getByText(/42/);
    expect(num).toBeInTheDocument();
  });
});
