import "./StickyRegion.css";

import React, { useContext, useState } from "react";
import classNames from "classnames/dedupe";
import { DeleteContext } from "../../../../common/contexts/delete.context";

type StickyRegionProps = {
  children?: any;
  className?: any;
  onDoubleClick: (pos: { x: number; y: number }) => any;
}

export const StickyRegion = ({
  children,
  className,
  onDoubleClick,
  ...props
}: StickyRegionProps) => {
  const [dragOver, setDragOver] = useState(false);
  const { callback } = useContext(DeleteContext);
  return (
    <>
      <div
        className={classNames(
          "delete-region h-16 bg-red block w-full text-center text-2xl py-4 text-white fixed top-0 left-0 z-10 opacity-0",
          {
            "opacity-50": dragOver
          }
        )}
        onDragOver={(e) => {
          setDragOver(true);
          e.preventDefault();
        }}
        onDragLeave={() => {
          setDragOver(false);
        }}
        onDrop={() => {
          if (typeof callback === "function") {
            callback();
          }
          setDragOver(false);
        }}
      >
        Drop Note to Delete
      </div>
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
    </>
  );
};
