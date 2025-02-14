import { AlignJustify, RefreshCw } from "lucide-react";
import { useLocation } from "react-router-dom";

export function Header() {

    const location = useLocation();
    const pageName = location.pathname.replace("/", "").replace("%20", " ");

    return (
        <header className="flex justify-between items-center w-full h-[70px] px-4">
            <AlignJustify color="rgba(255,255,255,0.5)" />
            <h1 className="text-xl font-semibold opacity-[0.5] capitalize">{pageName}</h1>
            <RefreshCw color="rgba(255,255,255,0.5)" />
        </header>
    );
}
