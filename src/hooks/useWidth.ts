import { useCallback, useState } from "react";
import useEventListener from "./useEventListener";
import debounce from "lodash.debounce";

export default function useWidth() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWindowSizeChange = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  const debounced = debounce(handleWindowSizeChange, 1000);

  useEventListener("resize", debounced);

  return { width };
}
