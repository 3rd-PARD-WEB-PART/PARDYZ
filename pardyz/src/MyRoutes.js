import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import DetailPage from "./Pages/DetailPage";
import WritingPage from "./Pages/WritingPage";
function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path ="/writing" element={<WritingPage />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
