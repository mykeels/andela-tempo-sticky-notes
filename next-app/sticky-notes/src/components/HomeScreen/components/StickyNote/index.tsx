import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";

import { StickyHeader } from "./components";
import { NotePosition, NoteSize, NotePreview } from "../../../../common/sticky-note.model";
import { assert } from "@/common";

const HEIGHT_OFFSET = 32;
export const DEFAULT_NOTE_WIDTH = 192;
export const DEFAULT_NOTE_HEIGHT = 160;

type StickyNoteProps = {
  note: NotePreview & { text: string };
  className?: any;
  onPositionChange?: (position: NotePosition) => any;
  onResize?: (size: NoteSize) => any;
  onChange?: (text: string) => any;
  Header?: () => JSX.Element;
};

export const StickyNote = ({
  note,
  className,
  onPositionChange,
  onResize,
  onChange,
  Header,
  ...props
}: StickyNoteProps & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "onResize">) => {
  const [pos, setPos] = useState(note.position || { top: 0, left: 0 });
  useEffect(() => {
    onPositionChange!(pos);
  }, [pos]);
  const $width = note.size?.width || DEFAULT_NOTE_WIDTH;
  const $height = note.size?.height || DEFAULT_NOTE_HEIGHT;
  const textareaRef = useRef<HTMLTextAreaElement>() as React.RefObject<HTMLTextAreaElement>;
  useEffect(() => {
    textareaRef.current?.focus();
  }, []);
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
      {Header ? <Header /> : null}
      <textarea
        ref={textareaRef}
        className="bg-gray-100 text-white text-lg p-4"
        style={{
          resize: "both",
          width: $width,
          height: $height - HEIGHT_OFFSET
        }}
        defaultValue={note.text}
        onBlur={(e) => onChange!(e.target.value)}
        onMouseUp={(e) => {
          const element = e.target as HTMLTextAreaElement & { offsetWidth: number, offsetHeight: number };
          onResize!({
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
    width: DEFAULT_NOTE_WIDTH,
    height: DEFAULT_NOTE_HEIGHT,
    zIndex: 1,
    position: { top: 0, left: 0 },
    color: "yellow",
    size: { width: DEFAULT_NOTE_WIDTH, height: DEFAULT_NOTE_HEIGHT }
  },
  Header: () => <StickyHeader onColorChange={() => { }} onZIndexChange={() => { }} />,
  onPositionChange: () => { }
} as Partial<StickyNoteProps>;
