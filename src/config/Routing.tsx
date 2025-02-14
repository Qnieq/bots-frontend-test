import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../components/layout/main-layout/MainLayout";
import { Dashboard } from "../components/screens/dashboard/Dashboard";
import { AnyScreen } from "../components/screens/any-screen/AnyScreen";

export function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Navigate to="/dashboard" />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/megabot" element={<AnyScreen />} />
                    <Route path="/bot market" element={<AnyScreen />} />
                    <Route path="/coin prices" element={<AnyScreen />} />
                    <Route path="/profile" element={<AnyScreen />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
