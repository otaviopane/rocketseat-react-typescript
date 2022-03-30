import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";
import { Login } from "./pages/Login";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}