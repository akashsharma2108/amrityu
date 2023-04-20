import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/home/home";


const AppRoutes = () => {
  return (      
  <Routes>
    <Route path="/" element={<Navigate to="/home" replace />} />
    <Route path="home" element={<Home />} />
    <Route path="*" element={<Navigate to="/home" replace />} />
  </Routes>
  );
};

export default AppRoutes;
