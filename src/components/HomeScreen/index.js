import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { StickyNote } from "./components/StickyNote";
import { StickyHeader } from "./components/StickyNote/components";
import { StickyRegion } from "./components/StickyRegion";

const DEFAULT_NOTE_WIDTH = 160;
const DEFAULT_NOTE_HEIGHT = 160;

const Header = (props) => {
  const [color, setColor] = useState(props.color || "blue");
  const [zIndex, setZIndex] = useState(1);

  return (
    <StickyHeader
      {...props}
      color={color}
      zIndex={zIndex}
      onColorChange={setColor}
      onZIndexChange={setZIndex}
      isExpanded
    />
  );
};

export const HomeScreen = () => {
  /** @type {[Partial<Note>, React.Dispatch<React.SetStateAction<Partial<Note>>>]} */
  const [preview, setPreview] = useState(null);
  /** @type {[Note[], React.Dispatch<React.SetStateAction<Note[]>>]} */
  const [notes, setNotes] = useState([]);
  /** @param {string} text */
  const addNote = (text) => {
    setNotes([
      ...notes,
      {
        id: uuid(),
        text,
        date: new Date(),
        color: preview.color,
        position: preview.position,
        size: preview.size,
        zIndex: 1
      }
    ]);
    setPreview(null);
  };
  return (
    <StickyRegion
      className="relative"
      onDoubleClick={(e) => {
        setPreview({
          ...(preview || {}),
          color: "blue",
          zIndex: 1,
          position: {
            top: e.y - Math.floor(DEFAULT_NOTE_HEIGHT / 4),
            left: e.x - Math.floor(DEFAULT_NOTE_WIDTH / 2)
          }
        });
      }}
    >
      <>
        {preview ? (
          <StickyNote
            position={preview?.position}
            onChange={(text) => addNote(text)}
            Header={() => (
              <StickyHeader
                color={preview.color}
                zIndex={preview.zIndex}
                onColorChange={(color) =>
                  setPreview({
                    ...(preview || {}),
                    color
                  })
                }
                onZIndexChange={(zIndex) =>
                  setPreview({
                    ...(preview || {}),
                    zIndex
                  })
                }
                isExpanded
              />
            )}
            onPositionChange={(position) =>
              setPreview({
                ...(preview || {}),
                position
              })
            }
            onResize={(size) =>
              setPreview({
                ...(preview || {}),
                size
              })
            }
            className="absolute"
            width={DEFAULT_NOTE_WIDTH}
            height={DEFAULT_NOTE_HEIGHT}
            key={`preview-${preview?.position?.left}-${preview?.position?.top}`}
          ></StickyNote>
        ) : null}
      </>
      {notes.map((note) => (
        <StickyNote
          key={note.id}
          className="absolute"
          Header={() => <Header />}
          text={note.text}
          width={note.size.width}
          height={note.size.height}
          position={note.position}
          onPositionChange={() => {}}
          onResize={() => {}}
          onChange={() => {}}
        ></StickyNote>
      ))}
    </StickyRegion>
  );
};
