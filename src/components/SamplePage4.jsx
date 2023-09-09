import { Link, Outlet, useNavigate } from "react-router-dom";

export const SamplePage4 = () => {
  // SamplePage4表示
  const navigate = useNavigate();

  // Outlet = ネストされたコンポーネントはココに表示される
  return (
    <>
      <h3>Sample Page4</h3>
      <ul>
        <li>
          <Link to="child1">Show Child1</Link>
        </li>
        <li>
          <Link to="child2">Show Child2</Link>
        </li>
      </ul>
      <button onClick={() => navigate("")}>Clear</button>
      <Outlet />
    </>
  );
};

export const SamplePage4Child1 = () => <h3>Sample Page4 Child1</h3>;
export const SamplePage4Child2 = () => <h3>Sample Page4 Child2</h3>;
