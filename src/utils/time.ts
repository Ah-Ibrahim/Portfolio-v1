const region = "Africa/Cairo";
const now = new Date();

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: region,
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
  hour12: false,
});

const parts = formatter.formatToParts(now);
const time = parts
  .filter((p) => p.type === "hour" || p.type === "minute" || p.value === ":")
  .map((p) => p.value)
  .join("");

const zone = parts.find((p) => p.type === "timeZoneName")?.value || "";

console.log(`${time} (${zone})`);
