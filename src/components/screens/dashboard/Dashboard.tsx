import { useEffect } from "react";
import { useBots } from "../../../store/bots";
import { Chart } from "../../shared/chart/Chart";
import { Balance } from "../../shared/balance/Balance";
import { Bots } from "../../shared/bots/Bots";
import { TimeRange } from "../../shared/time-range/TimeRange";

export function Dashboard() {
    const {selectedBot, timeRange, setTradingDataFromJson } = useBots();

    useEffect(() => {
        setTradingDataFromJson();
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center gap-[5px]">
            <Balance />
            <Chart selectedBot={selectedBot} timeRange={timeRange} />
            <Bots />
            <TimeRange />
        </div>
    );
}
