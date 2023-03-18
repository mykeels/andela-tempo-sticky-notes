
import classNames from "classnames";
import { DateTime } from "luxon";
import React, { useEffect, useRef, useState } from "react";

import { NoteColor } from "../../../../../../common/sticky-note.model";
import { setDefaultProps } from "../../../../../../common";

type StickyHeaderProps = {
  isExpanded?: boolean;
  color?: NoteColor;
  zIndex?: number;
  date?: string | number | Date;
  onColorChange: (color: NoteColor) => any;
  onZIndexChange: (color: number) => any;
  defaults?: { focused: boolean };
}

export const StickyHeader = ({
  isExpanded,
  color,
  zIndex,
  date,
  onColorChange,
  onZIndexChange,
  defaults
}: StickyHeaderProps) => {
  const controlRef = useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;
  const [focused, setFocused] = useState(defaults?.focused);
  useEffect(() => {
    const onWindowClick = (e: MouseEvent) => {
      const elem = e.target as HTMLElement;
      if (
        !elem.closest(".sticky-header-control") &&
        !elem.closest(".sticky-header-button")
      ) {
        setFocused(false);
      }
    };
    window.addEventListener("click", onWindowClick);
    const onEscapePressed = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setFocused(false);
      }
    };
    window.addEventListener("keyup", onEscapePressed);
    return () => {
      window.removeEventListener("click", onWindowClick);
      window.removeEventListener("keyup", onEscapePressed);
    };
  }, []);

  return isExpanded ? (
    <div
      className={classNames(
        `bg-${color}`,
        " px-2 py-2 block w-full relative overflow-visible sticky-header"
      )}
    >
      <div className="inline-block w-1/2 text-xs">
        <span className="relative bottom-1">
          {date ? DateTime.fromJSDate(new Date(date)).toRelative() : null}
        </span>
      </div>
      <div className="inline-block w-1/2 text-right">
        <button
          className="text-2xl text-gray-200 inline-block focus:outline px-4 relative sticky-header-button"
          onClick={() => setFocused(true)}
        >
          <span className="relative bottom-2">...</span>
        </button>
        {focused ? (
          <div
            className={classNames(
              `border-${color}`,
              "absolute bg-gray-300 w-64 h-32 inline-block right-0 top-0 sticky-header-control border-2"
            )}
            style={{
              top: "48px"
            }}
            ref={controlRef}
          >
            <div className="block w-full py-2">
              <div className="inline-block w-1/4 p-2">
                <button
                  className="bg-blue p-2 w-8 h-8 border-transparent hover:border-gray-200 border-2"
                  onClick={() => onColorChange("blue")}
                >
                  &nbsp;
                </button>
              </div>
              <div className="inline-block w-1/4 p-2">
                <button
                  className="bg-yellow p-2 w-8 h-8 border-transparent hover:border-gray-200 border-2"
                  onClick={() => onColorChange("yellow")}
                >
                  &nbsp;
                </button>
              </div>
              <div className="inline-block w-1/4 p-2">
                <button
                  className="bg-lime p-2 w-8 h-8 border-transparent hover:border-gray-200 border-2"
                  onClick={() => onColorChange("lime")}
                >
                  &nbsp;
                </button>
              </div>
              <div className="inline-block w-1/4 p-2">
                <button
                  className="bg-green p-2 w-8 h-8 border-transparent hover:border-gray-200 border-2"
                  onClick={() => onColorChange("green")}
                >
                  &nbsp;
                </button>
              </div>
            </div>
            <div className="text-white py-2">
              <div className="block text-center text-xs">z-position</div>
              <div className="block w-full">
                <div className="inline-block w-1/3 text-right">
                  <button onClick={() => onZIndexChange(zIndex! - 1)}>⬅️</button>
                </div>
                <div className="inline-block w-1/3 text-center text-lg">
                  {zIndex}
                </div>
                <div className="inline-block w-1/3 text-left">
                  <button onClick={() => onZIndexChange(zIndex! + 1)}>➡️</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  ) : (
    <div className={classNames(`bg-${color}`, " p-2 block w-full")}></div>
  );
};

setDefaultProps(
  StickyHeader,
  {
    color: "blue",
    zIndex: 1,
    defaults: {
      focused: false
    }
  }
);
