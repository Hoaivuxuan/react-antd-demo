import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom"; 
//
const HomePage = lazy(() => import("../features/home_page/HomePage"));
//
const AppRoutes = () => (
    <Routes>
        <Route path="/home" element={<HomePage/>} />
    </Routes>
);

export default AppRoutes;