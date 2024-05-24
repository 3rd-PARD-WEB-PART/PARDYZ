import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import DetailPage from "./Pages/DetailPage";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
