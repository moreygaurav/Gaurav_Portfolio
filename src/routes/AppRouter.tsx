import {HashRouter,Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<about/>} />
                <Route path="/projects" element={<projects/>} />
                <Route path="/contact" element={<contact/>} /> */}
            </Routes>
        </HashRouter>
    );
}
export default AppRouter;