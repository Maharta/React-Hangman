import { useEffect, useRef } from "react";

export default function useEventListener<T extends keyof HTMLElementEventMap>(
  event: T,
  callback: (e: HTMLElementEventMap[T]) => void,
  element: Window | HTMLElement = window
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler: typeof callback = (e) => {
      callbackRef.current(e);
    };
    element.addEventListener(event, handler as EventListener);

    return () => {
      element.removeEventListener(event, handler as EventListener);
    };
  }, [element, event]);
}
