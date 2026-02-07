import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../components/About/About";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
