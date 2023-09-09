import { BrowserRouter, Route } from "react-router-dom";
import { SampleHome } from "./components/SampleHome";
import { SamplePage1 } from "./components/SamplePage1";
import { SamplePage2 } from "./components/SamplePage2";
import { Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound";

export const RouterConfig = () => {
  // Route: path = パス指定、element = コンポーネント指定
  // "*" = URLに一致しない場合のルート
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SampleHome />} />
          <Route path="page1" element={<SamplePage1 />} />
          <Route path="page2" element={<SamplePage2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
