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

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
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
    const [chartData, setChartData] = useState<{ name: string; value: number }[]>([]);
    const [chartHeight, setChartHeight] = useState<number>(calculateChartHeight());
  
    // Метод для вычисления высоты графика на основе высоты окна
    function calculateChartHeight(): number {
      const factor = 0.25; // 20% от высоты окна
      let height = window.innerHeight * factor;
      if (height < 140) height = 140;
      if (height > 400) height = 400;
      return height;
    }
  
    useEffect(() => {
      if (selectedBot) {
        setChartData(generateChartData(timeRange));
      }
    }, [selectedBot, timeRange]);
  
    // Обновляем высоту при изменении размера окна
    useEffect(() => {
      function handleResize() {
        setChartHeight(calculateChartHeight());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <ResponsiveContainer width="100%" height={chartHeight}>
        <ComposedChart data={chartData} margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="30%" stopColor="rgba(0,109,195,1)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(245, 245, 245, 0.1)" strokeDasharray="1 1" />
          <XAxis
            dataKey="name"
            stroke="rgba(245, 245, 245, 0.5)"
            strokeDasharray="1 1"
            domain={["dataMin", "dataMax"]}
            type="category"
          />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="value" stroke="#006dc3" fill="url(#colorFill)" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }