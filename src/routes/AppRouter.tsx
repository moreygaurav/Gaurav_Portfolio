import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "../Pages/Home";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
            
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<about/>} />
                <Route path="/projects" element={<projects/>} />
                <Route path="/contact" element={<contact/>} /> */}
            </Routes>
        </BrowserRouter>

    );
}
export default AppRouter;