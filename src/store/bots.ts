import { create } from "zustand";
import { IBot } from "../types/bots.types";
import { createJSONStorage, persist } from "zustand/middleware";

interface StoreState {
    bots: IBot[];
    tradingCapital: number;
    balance: number;
    onHold: number;
    selectedBot: IBot | null;
    tradingCapitalCurrency: string
    timeRange: "24h" | "7d" | "30d" | "all_time";
    setBots: (bots: IBot[]) => void;
    setTradingData: (capital: number, balance: number, onHold: number) => void;
    selectBot: (bot: IBot) => void;
    setTimeRange: (range: "24h" | "7d" | "30d" | "all_time") => void;
    setTradingDataFromJson: () => Promise<void>;
}

export const useBots = create<StoreState>()(
    persist(
        (set) => ({
            bots: [],
            tradingCapital: 0,
            balance: 0,
            onHold: 0,
            selectedBot: null,
            tradingCapitalCurrency: "",
            timeRange: "24h",
            setBots: (bots) => set({ bots }),
            setTradingData: (capital, balance, onHold) =>
                set({ tradingCapital: capital, balance, onHold }),
            selectBot: (bot) => set({ selectedBot: bot }),
            setTimeRange: (range) => set({ timeRange: range }),
            setTradingDataFromJson: async () => {
                const response = await fetch("src/data/data.min.json");
                const data = await response.json();
                set({
                    bots: data.bots,
                    tradingCapital: data.trading_capital,
                    balance: data.balance,
                    onHold: data.on_hold,
                    tradingCapitalCurrency: data.trading_capital_currency,
                    selectedBot: data.bots[0],
                });
            },
        }),
        {
            name: "bots-storage",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
