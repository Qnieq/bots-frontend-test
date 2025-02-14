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
            <h5
                className="font-semibold opacity-[0.5]"
                style={{
                    fontSize: "clamp(10px, 2vw, 12px)"
                }}
            >
                Time Range:
            </h5>
            {["24h", "7d", "30d", "all_time"].map((range) => (
                <Button
                    key={range}
                    onClick={() => setTimeRange(range as "24h" | "7d" | "30d" | "all_time")}
                    className="flex justify-center items-center w-[50px] h-[20px] py-3 text-[9px] rounded-full"
                    style={{
                        opacity: range == timeRange ? 1 : 0.5,
                        border: "1px solid #fff"
                    }}
                >
                    {formatting(range)}
                </Button>
            ))}
        </div>
    );
}
