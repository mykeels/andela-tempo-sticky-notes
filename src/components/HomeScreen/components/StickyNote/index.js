import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { StickyHeader } from "./components";

const HEIGHT_OFFSET = 32;
const DEFAULT_WIDTH = 160;
const DEFAULT_HEIGHT = 160;

/**
 *
 * @param {object} props
 * @param {Note} props.note
 * @param {(position: NotePosition) => any} [props.onPositionChange]
 * @param {any} [props.className]
 * @param {(size: NoteSize) => any} props.onResize
 * @param {(text: string) => any} props.onChange
 * @param {() => JSX.Element} [props.Header]
 * @returns {JSX.Element}
 */
export const StickyNote = ({
  note,
  className,
  onPositionChange,
  onResize,
  onChange,
  Header,
  ...props
}) => {
  const [pos, setPos] = useState(note.position || { top: 0, left: 0 });
  useEffect(() => {
    onPositionChange(pos);
  }, [pos]);
  const $width = note.size?.width || DEFAULT_WIDTH;
  const $height = note.size?.height || DEFAULT_HEIGHT;
  return (
    <div
      {...props}
      className={classNames(className, "bg-gray-100 inline-block p-0")}
      style={{ top: pos.top, left: pos.left, zIndex: note.zIndex }}
      onDragEnd={(e) => {
        setPos({
          top: e.clientY - HEIGHT_OFFSET,
          left: e.clientX - Math.floor($width / 2 - HEIGHT_OFFSET / 2)
        });
      }}
      draggable
    >
      <Header />
      <textarea
        className="bg-gray-100 text-white text-lg p-4"
        style={{
          resize: "both",
          width: $width,
          height: $height - HEIGHT_OFFSET
        }}
        defaultValue={note.text}
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
  note: {
    text: "",
    width: 160,
    height: 160,
    zIndex: 1,
    position: { top: 0, left: 0 }
  },
  Header: StickyHeader,
  onPositionChange: () => {}
};
