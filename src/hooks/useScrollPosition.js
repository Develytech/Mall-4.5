import { useEffect, useState } from "react";

export function useScrollPosition(threshold = 40) {
  const [hasScrolledPast, setHasScrolledPast] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolledPast(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return hasScrolledPast;
}
