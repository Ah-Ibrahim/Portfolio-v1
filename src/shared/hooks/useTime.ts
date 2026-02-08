import { createTimeObject } from "@/shared/lib/utils/time";
import { useEffect, useState } from "react";

const timeObject = createTimeObject();
const REFRESH_TIME_MS = 1000;

interface TimeInfo {
  time: string;
  timeZone: string;
}

function useTime(): TimeInfo {
  const [time, setTime] = useState<string>(timeObject.getTime());
  const timeZone = timeObject.getTimeZone();

  useEffect(() => {
    const id = setInterval(
      () => setTime(timeObject.getTime()),
      REFRESH_TIME_MS,
    );

    return () => clearInterval(id);
  }, []);

  return { time, timeZone };
}

export default useTime;
