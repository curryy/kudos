import React from "react";

export function useClickOutside(
  elements: React.RefObject<HTMLElement>[],
  callback: () => void
) {
  React.useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        !elements.some((element) => element.current?.contains(e.target as Node))
      ) {
        callback();
      }
    };
    window.addEventListener("click", onClickOutside);
    return () => {
      window.removeEventListener("click", onClickOutside);
    };
  }, []);
}
