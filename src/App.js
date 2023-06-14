import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

// 아래는 React Router 예시입니다.
// 예시 Route 3가지는 지우고 시작해주세요!

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/hello" element={<>Hello, World!</>} />
        <Route path="/welcome/:name" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
