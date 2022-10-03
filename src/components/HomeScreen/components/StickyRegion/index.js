import "./StickyRegion.css";

import React from "react";
import classNames from "classnames/dedupe";

/**
 * @param {object} props
 * @param {any} [props.children]
 * @param {any} [props.className]
 * @param {(pos: { x: number, y: number }) => any} [props.onDoubleClick]
 * @returns {JSX.Element}
 */
export const StickyRegion = ({
  children,
  className,
  onDoubleClick,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames(
        className,
        "bg-gray-200 block sticky-region cursor-pointer"
      )}
      onDoubleClick={(e) => {
        onDoubleClick({
          x: e.clientX,
          y: e.clientY
        });
      }}
    >
      {children}
    </div>
  );
};
