import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import DetailPage from "./Pages/DetailPage";
import WritingPage from "./Pages/WritingPage";
import Sidebar from "./Sidebar";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route element={<Sidebar />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/writing" element={<WritingPage />} />
          <Route path="/sidebar" element={<Sidebar />} />
        </Route>
      </Routes>
    </>
  );
}

export default MyRoutes;
