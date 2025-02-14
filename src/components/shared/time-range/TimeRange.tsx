import { useBots } from "../../../store/bots";
import { Button } from "../../UI/Button";

export function TimeRange() {

    const { setTimeRange, timeRange } = useBots()

    const formatting = (item: string) => {

        if (item === "all_time") {
            return "All time"
        } else if (item == "7d" || item == "30d") {
            return `${item.replace("d", " ")}days`
        }

        return item
    }

    return (
        <div className="flex justify-center items-center gap-2 ">
            <h5 className="text-[12px] font-bold opacity-[0.5]">
                Time Range:
            </h5>
            {["24h", "7d", "30d", "all_time"].map((range) => (
                <Button
                    key={range}
                    onClick={() => setTimeRange(range as "24h" | "7d" | "30d" | "all_time")}
                    className="flex justify-center items-center w-[60px] h-[20px] py-3 text-[10px] border-1 border-white rounded-full"
                    style={{
                        opacity: range == timeRange ? 1 : 0.5
                    }}
                >
                    {formatting(range)}
                </Button>
            ))}
        </div>
    );
}
