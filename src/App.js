import { BrowserRouter, Routes, Route } from "react-router-dom";
import OwnerPage from "./pages/OwnerPage";
import OwnerPageCreate from "./pages/OwnerPageCreate";
import Article from "./pages/Article";
import ArticleEdit from "./pages/ArticleEdit";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:ownerId" element={<OwnerPage />} />
        <Route path="/:ownerId/create" element={<OwnerPageCreate />} />
        <Route path="/articles/:articleId" element={<Article />} />
        <Route path="/articles/:articleId/edit" element={<ArticleEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
