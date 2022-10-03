import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { StickyHeader } from "./components";

const HEIGHT_OFFSET = 32;

/**
 *
 * @param {object} props
 * @param {number} [props.width]
 * @param {number} [props.height]
 * @param {{ top: any, left: any }} [props.position]
 * @param {string} [props.text]
 * @param {(position: { top: any, left: any }) => any} [props.onPositionChange]
 * @param {any} [props.className]
 * @param {(size: { width: number, height: number }) => any} props.onResize
 * @param {(text: string) => any} props.onChange
 * @param {() => JSX.Element} [props.Header]
 * @returns {JSX.Element}
 */
export const StickyNote = ({
  width,
  height,
  text,
  className,
  position,
  onPositionChange,
  onResize,
  onChange,
  Header,
  ...props
}) => {
  const [pos, setPos] = useState(position);
  useEffect(() => {
    onPositionChange(pos);
  }, [pos]);
  return (
    <div
      {...props}
      className={classNames(className, "bg-gray-100 inline-block p-0")}
      style={{ top: pos.top, left: pos.left }}
      onDragEnd={(e) => {
        setPos({
          top: e.clientY - HEIGHT_OFFSET,
          left: e.clientX - Math.floor(width / 2) - HEIGHT_OFFSET / 2
        });
      }}
      draggable
    >
      <Header />
      <textarea
        className="bg-gray-100 text-white text-lg p-4"
        style={{
          resize: "both",
          width,
          height: height - HEIGHT_OFFSET
        }}
        defaultValue={text}
        onBlur={(e) => onChange(e.target.value)}
        onMouseUp={(e) => {
          /** @type {HTMLTextAreaElement & { offsetWidth: number, offsetHeight: number }} */
          // @ts-ignore
          const element = e.target;
          onResize({
            width: element.offsetWidth,
            height: element.offsetHeight + HEIGHT_OFFSET
          });
        }}
      ></textarea>
    </div>
  );
};

StickyNote.defaultProps = {
  text: "",
  width: 160,
  height: 160,
  Header: StickyHeader,
  position: { top: 0, left: 0 },
  onPositionChange: () => {}
};
