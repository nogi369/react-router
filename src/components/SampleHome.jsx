import { Link, createSearchParams, useNavigate } from "react-router-dom";

export const SampleHome = () => {
  // useNavigate = ボタンのクリックなどでルーティングを行う場合に使用する関数
  const navigate = useNavigate();

  // createSearchParams = クエリパラメータを作成する関数
  const params = createSearchParams({
    query1: "value3",
    query2: "value4",
  }).toString();

  /**
   * Link  = リンク作成
   * <Outlet /> =
   */

  return (
    <>
      <h1>Sample Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="page1">Sample Page1</Link>
          </li>
          <li>
            <Link to="page2">Sample Page2</Link>
          </li>
          <li>
            <Link to="page2?query1=value1&query2=value2">
              Sample Page2 With Query1
            </Link>
          </li>
          <li>
            <Link to={`page2?${params}`}>Sample Page2 With Query2</Link>
          </li>
          <li>
            <Link to="page3_hello">Sample Page3 Hello</Link>
          </li>
          <li>
            <Link to="page3_hi">Sample Page3 Hi</Link>
          </li>
          <li>
            <Link to="page4">Sample Page4</Link>
          </li>
        </ul>

        <button onClick={() => navigate("page1")}>Sample Page1</button>
      </nav>
    </>
  );
};

/**
 * @page2へのリンク
 * 1つ目はクエリーパラメータがないpage2へのリンク
 * 2つ目はクエリーパラメータを「/page2?query1=value1&query2=value2"」と直接かいているpage2へのリンク
 * 3つ目はクエリーパラメータを「createSearchParams関数を」で作成しているpage2へのリンク
 */
