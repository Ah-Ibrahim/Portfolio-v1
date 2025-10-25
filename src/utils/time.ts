export interface TimeObject {
  getTime: () => string;
  getTimeZone: () => string;
}

export function createTimeObject(): TimeObject {
  const region = "Africa/Cairo";

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: region,
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
    hour12: false,
  });
  let parts = formatter.formatToParts(new Date());
  let intervalId: number;

  return {
    // updateTime(callback: () => void) {
    //   if (intervalId) throw Error("Already updating time");

    //   intervalId = setInterval(() => {
    //     parts = formatter.formatToParts(new Date());
    //     callback();
    //   }, 1000);
    // },
    // stopUpdateTime() {
    //   clearInterval(intervalId);
    // },
    getTime(): string {
      parts = formatter.formatToParts(new Date());
      const time = parts
        .filter(
          (p) => p.type === "hour" || p.type === "minute" || p.value === ":"
        )
        .map((p) => p.value)
        .join("");

      return time;
    },
    getTimeZone(): string {
      parts = formatter.formatToParts(new Date());
      const zone = parts.find((p) => p.type === "timeZoneName")?.value || "";
      return zone;
    },
  };
}
