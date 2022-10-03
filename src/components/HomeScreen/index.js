import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { StickyNote } from "./components/StickyNote";
import { StickyHeader } from "./components/StickyNote/components";
import { StickyRegion } from "./components/StickyRegion";

const DEFAULT_NOTE_WIDTH = 160;
const DEFAULT_NOTE_HEIGHT = 160;

export const HomeScreen = () => {
  /** @type {[Partial<Note>, React.Dispatch<React.SetStateAction<Partial<Note>>>]} */
  const [preview, setPreview] = useState(null);
  /** @type {[Note[], React.Dispatch<React.SetStateAction<Note[]>>]} */
  const [notes, setNotes] = useState([]);
  /** @param {string} text */
  const addNote = (text) => {
    if (!text) {
      return;
    }
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
  /** @param {Partial<Note>} note */
  const editNote = (note) => {
    setNotes(notes.map((n) => (n.id === note.id ? { ...n, ...note } : n)));
    console.log(notes);
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
            zIndex={preview.zIndex}
            key={`preview-${preview?.position?.left}-${preview?.position?.top}`}
          ></StickyNote>
        ) : null}
      </>
      {notes.map((note) => (
        <StickyNote
          key={note.id}
          className="absolute"
          text={note.text}
          width={note.size.width}
          height={note.size.height}
          position={note.position}
          zIndex={note.zIndex}
          Header={() => (
            <StickyHeader
              color={note.color}
              zIndex={note.zIndex}
              onColorChange={(color) =>
                editNote({
                  ...note,
                  color
                })
              }
              onZIndexChange={(zIndex) =>
                editNote({
                  ...note,
                  zIndex
                })
              }
              isExpanded
            />
          )}
          onPositionChange={(position) =>
            editNote({
              ...note,
              position
            })
          }
          onResize={(size) =>
            editNote({
              ...note,
              size
            })
          }
          onChange={(text) =>
            editNote({
              ...note,
              text
            })
          }
        ></StickyNote>
      ))}
    </StickyRegion>
  );
};
