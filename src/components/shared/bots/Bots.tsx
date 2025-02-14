import { useBots } from "../../../store/bots";
import { Button } from "../../UI/Button";

const botsImages: { [key: string]: string } = {
    "yellow_bot": "/bots/yellow.png",
    "white_bot": "/bots/black.png",
    "green_bot": "/bots/green.png",
    "red_bot": "/bots/red.png",
    "blue_bot": "/bots/blue.png",
    "orange_bot": "/bots/orange.png",
}

export function Bots() {

    const { selectBot, timeRange, bots, selectedBot } = useBots()

    return (
        <div className="grid grid-cols-3 gap-[2px]">
            {bots.map((bot) => (
                <Button
                    key={bot.name}
                    onClick={() => selectBot(bot)}
                    className="flex justify-center items-end bg-gray-800 rounded shadow-lg"
                    style={{
                        width: "clamp(75px, 28vw, 160px)",
                        height: "clamp(75px, 28vw, 160px)",
                        boxShadow: bot.name == selectedBot?.name ? "inset 0px 0px 20px rgba(10, 102, 206, 0.5)" : ""
                    }}
                >
                    <div className="flex flex-col justify-end items-center gap-[6px]">
                        <img
                            src={botsImages[bot.name]}
                            alt="bot_image"
                            style={{
                                width: "clamp(30px, 10vw, 80px)",
                            }}
                        />
                        <div className="flex flex-col">
                            <h4
                                className="font-bold"
                                style={{
                                    fontSize: "clamp(10px, 2vw, 14px)"
                                }}
                            >
                                {bot.name.toUpperCase()}
                            </h4>
                            <span
                                style={{
                                    fontSize: "clamp(10px, 2vw, 14px)",
                                    color: bot[timeRange] > 0 ? "#5ea753" : "#e24078"
                                }}
                            >
                                {bot[timeRange]}%
                            </span>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    );
}
