import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";

import { ScrollToTop } from "../utils/ScrollToTop";
import { PortfolioPage } from "../pages/PortfolioPage";

import "./app.scss";

const router = createBrowserRouter([{ path: "*", Component: Root }]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/CV" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}
