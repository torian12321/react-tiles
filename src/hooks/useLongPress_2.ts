import { useCallback, useRef, useState } from "react";

interface ClickActions {
  onLongPress?: Function,
  onClick?: Function,
  onMouseUp?: Function,
};
interface Options {
  shouldPreventDefault?: boolean,
  delay?: number,
}

const useLongPress = (
  {
    onClick = () => {},
    onLongPress = () => {},
    onMouseUp = () => {},
  }: ClickActions = {},
  {
    shouldPreventDefault = true,
    delay = 300
  }: Options = {}
): any => {
  const [longPressTriggered, setLongPressTriggered] = useState(false);
  const timeout: any = useRef();
  const target: any = useRef();

  const start = useCallback(
    event => {
      if (shouldPreventDefault && event.target) {
          event.target.addEventListener("touchend", preventDefault, {
          passive: false
        });
        target.current = event.target;
      }
      timeout.current = setTimeout(() => {
        onLongPress && onLongPress(event);
          setLongPressTriggered(true);
      }, delay);
    },
    [onLongPress, delay, shouldPreventDefault]
  );

  const clear = useCallback((
    event, shouldTriggerClick = true
  ) => {
      timeout.current && clearTimeout(timeout.current);
      shouldTriggerClick && !longPressTriggered && onClick();
      setLongPressTriggered(false);
      if (shouldPreventDefault && target.current) {
        target.current.removeEventListener("touchend", preventDefault);
      }
    },
    [shouldPreventDefault, onClick, longPressTriggered]
  );

  return {
    onTouchStart: (e: Event) => start(e),
    onMouseUp: (e: Event) => { clear(e); onMouseUp(e)},
    onMouseLeave: (e: Event) => clear(e, false),
    onTouchEnd: (e: Event)=> clear(e)
  };
};

const isTouchEvent = (event: Event) => {
  return "touches" in event;
};

const preventDefault = (event: any) => {
  if (!isTouchEvent(event)) return;

  if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
  }
};

export default useLongPress;