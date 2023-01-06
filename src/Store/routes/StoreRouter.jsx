import { Route, Routes } from "react-router-dom";
import { MainStore, ViewArticle, MyCartPage, SelfArticle } from "../";

export const StoreRouter = () => {
  return (
    <Routes>
      <Route path="" element={<MainStore />} />
      <Route path="myCart/:name" element={<MyCartPage />} />
      <Route path="selfArticle" element={<SelfArticle />} />
      <Route path="viewArticle/:id" element={<ViewArticle />} />
    </Routes>
  );
};
