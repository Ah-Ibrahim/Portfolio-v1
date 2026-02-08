"use client";

import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateHandler = () => setMatches(media.matches);

    updateHandler();

    media.addEventListener("change", updateHandler);

    return () => media.removeEventListener("change", updateHandler);
  }, [query]);

  return matches;
}
export default useMediaQuery;
