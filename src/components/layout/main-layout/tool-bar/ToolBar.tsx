import { Bitcoin, ChartNoAxesCombined, Logs, Settings, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const tools = [
    {
        title: "dashboard",
        icon: <Logs />,
    },
    {
        title: "megabot",
        icon: <ChartNoAxesCombined />,
    },
    {
        title: "bot market",
        icon: <ShoppingCart />,
    },
    {
        title: "coin prices",
        icon: <Bitcoin />,
    },
    {
        title: "profile",
        icon: <Settings />,
    },
]

export function ToolBar() {

    const location = useLocation();
    const pageName = location.pathname.replace("/", "").replace("%20", " ");

    return (
        <div className="flex justify-between items-center w-full h-[55px] px-5 bg-[#18283c]">
            {tools.map((item, index) => (
                <Link to={`/${item.title}`}>
                    <div
                        key={index}
                        className="flex flex-col items-center"
                        style={{
                            opacity: pageName == item.title ? "1" : "0.5"
                        }}
                    >
                        {item.icon}
                        <p className="text-[10px] capitalize">
                            {item.title}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
