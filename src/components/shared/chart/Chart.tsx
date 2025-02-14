import { useState, useEffect } from "react";
import {
    ResponsiveContainer,
    ComposedChart,
    CartesianGrid,
    XAxis,
    Tooltip,
    Area,
} from "recharts";
import { generateChartData } from "./filter-time-range";

interface IBot {
    name: string;
    "24h": number;
    "7d": number;
    "30d": number;
    all_time: number;
}

interface IChart {
    selectedBot: IBot | null;
    timeRange: "24h" | "7d" | "30d" | "all_time";
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: { value: number }[];
}

const CustomTooltip = ({ active, payload}: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[rgba(0,0,0,0.6)] px-2 rounded-full">
                <p className="text-[#00c91e]">{`${payload[0].value.toFixed(2)}%`}</p>
            </div>
        );
    }

    return null;
};

export function Chart({ selectedBot, timeRange }: IChart) {
    const [chartData, setChartData] = useState<{ name: string; value: number }[]>(
        []
    );

    useEffect(() => {
        if (selectedBot) {
            setChartData(generateChartData(timeRange));
        }
    }, [selectedBot, timeRange]);

    return (
        <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                <defs>
                    <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="30%" stopColor="rgba(0,109,195,1)" />
                        <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                    </linearGradient>
                </defs>
                <CartesianGrid
                    stroke="rgba(245, 245, 245, 0.1)"
                    strokeDasharray="1 1"
                />
                <XAxis
                    dataKey="name"
                    stroke="rgba(245, 245, 245, 0.5)"
                    strokeDasharray="1 1"
                    domain={["dataMin", "dataMax"]}
                    type="category"
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#006dc3"
                    fill="url(#colorFill)"
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
}
