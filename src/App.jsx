import "./App.css";
import "./assets/normalize.css";

import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Videos from "./pages/Videos/videos";
import Category from "./pages/category/categories";
import GlobalContext from "./provider";

function App() {
    return (
        <GlobalContext>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/video"
                    element={<Videos />}
                />
                <Route
                    path="/category"
                    element={<Category />}
                />
                <Route
                    path="*"
                    element={<Footer />}
                />
            </Routes>
        </GlobalContext>
    );
}

export default App;
