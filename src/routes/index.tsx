import { Route, Routes, Navigate } from "react-router-dom";
import { About } from "../pages/About us/about";
import { Contact } from "../pages/contact /contact";
import { Home } from "../pages/home/home";
import { ServicePage } from "../pages/services/services";


const AppRoutes = () => {
  return (      
  <Routes>
    {/* add ancors tag whihc will be used to scroll to the particular section */}
    <Route path="/" element={<Navigate to="/home" replace />} />
    <Route path="home" element={<Home />} />
    <Route path="contact-us" element={<Contact />} />
    <Route path="service" element={<ServicePage />} />
    <Route path="about" element={<About />}/>
    <Route path="*" element={<Navigate to="/home" replace />} />
  </Routes>
  );
};

export default AppRoutes;
