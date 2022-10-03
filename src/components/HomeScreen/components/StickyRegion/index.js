import React from "react";

/**
 * @param {object} props
 * @param {any} [props.children]
 * @returns {JSX.Element}
 */
export const StickyRegion = ({ children }) => {
  return <div className="bg-gray-200">{children}</div>;
};
