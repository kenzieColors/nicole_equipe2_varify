import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";

const Router = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
  </Routes>
);

export default Router;
