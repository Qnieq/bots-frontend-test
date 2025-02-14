export function generateChartData(
  timeRange: "24h" | "7d" | "30d" | "all_time"
): { name: string; value: number }[] {
  let segments = 0;
  switch (timeRange) {
    case "24h":
      segments = 24;
      break;
    case "7d":
      segments = 7;
      break;
    case "30d":
      segments = 30;
      break;
    case "all_time":
      segments = 90;
      break;
  }

  const data = Array.from({ length: segments }, (_, i) => {
    let label = "";
    if (timeRange === "24h") {
      const hour = (i + 1) * 1;
      label = `${hour.toString().padStart(2, "0")}:00`;
    } else {
      label = `Day ${(i + 1) * 1}`;
    } 
    return { name: label, value: Math.random() * 10 };
  });

  // Добавляем дополнительные элементы с пустым name в начало и конец
  return [{ name: "", value: Math.random() * 10 }, ...data, { name: "", value: Math.random() * 10 }];
}
