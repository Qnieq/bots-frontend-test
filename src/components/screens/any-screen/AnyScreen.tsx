import { useLocation } from "react-router-dom";

export function AnyScreen() {
    const location = useLocation();
    const pageName = location.pathname.replace("/", "").replace("%20", " ");

    return <div>{pageName}</div>;
}