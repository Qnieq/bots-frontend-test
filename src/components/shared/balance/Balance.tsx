import { useBots } from "../../../store/bots";

export function Balance() {

    const { balance, onHold, tradingCapital, tradingCapitalCurrency } = useBots()

    const balanceData = [
        {
            title: "BALANCE:",
            value: balance
        },
        {
            title: "ON HOLD:",
            value: onHold
        },
    ]

    return (
        <div className="flex justify-between items-end w-full px-4 leading-none">
            <div className="flex flex-col gap-[3px]">
                <h5 className="text-[0.8rem] opacity-[0.6] uppercase">
                    trading capital
                </h5>
                <h4 className="text-[2rem] leading-[50px] uppercase">{tradingCapital.toFixed(5)} {tradingCapitalCurrency}</h4>
            </div>
            <div className="flex flex-col">
                {balanceData.map((item, index) => (
                    <div key={index} className="flex items-center gap-[3px]">
                        <div className="flex w-[110px] justify-between items-center">
                            <span className="text-[13px] opacity-[0.6]">{item.title}</span>
                            <p className="text-[13px]">{item.value}</p>
                        </div>
                        <img src="/balance-icon.png" alt="icon" className="w-[23px] h-[23px]" />
                    </div>
                ))}
            </div>
        </div>
    );
}
