import "./StickyRegion.css";

import React from "react";

/**
 * @param {object} props
 * @param {any} [props.children]
 * @param {() => any} [props.onDoubleClick]
 * @returns {JSX.Element}
 */
export const StickyRegion = ({ children, onDoubleClick }) => {
  return (
    <div
      className="bg-gray-200 block sticky-region cursor-pointer"
      onDoubleClick={onDoubleClick}
    >
      {children}
    </div>
  );
};
