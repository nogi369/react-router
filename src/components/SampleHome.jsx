import { Link, createSearchParams } from "react-router-dom";

export const SampleHome = () => {
  const params = createSearchParams({
    query1: "value3",
    query2: "value4",
  }).toString();

  // Link  = リンク作成
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
        </ul>
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
