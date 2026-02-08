"use client";

import useTime from "@/shared/hooks/useTime";

function FooterTime() {
  const { time, timeZone } = useTime();

  return (
    <div>
      Alexandria, Egypt: ({timeZone}) {time}
    </div>
  );
}
export default FooterTime;
