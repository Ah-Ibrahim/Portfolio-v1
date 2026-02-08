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

  return {
    getTime(): string {
      const parts = formatter.formatToParts(new Date());
      const time = parts
        .filter(
          (p) => p.type === "hour" || p.type === "minute" || p.value === ":"
        )
        .map((p) => p.value)
        .join("");

      return time;
    },
    getTimeZone(): string {
      const parts = formatter.formatToParts(new Date());
      const zone = parts.find((p) => p.type === "timeZoneName")?.value || "";
      return zone;
    },
  };
}
