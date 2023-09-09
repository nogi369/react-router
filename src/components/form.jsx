// 入力フォームの実装
import { useState } from "react";

export const Form = () => {
  const [serchKeyWord, setSerchKeyword] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search Keyword"
        value={serchKeyWord}
        onChange={(e) => setSerchKeyword(e.target.value)}
      />
      <span>{serchKeyWord}</span>
    </div>
  );
};
