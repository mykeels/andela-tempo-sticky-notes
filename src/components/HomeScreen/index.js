import React, { useState } from "react";
import { useQuery } from "react-query";
import { v4 as uuid } from "uuid";
import { useCacheInvalidation } from "../../hooks";

import { StickyNote } from "./components/StickyNote";
import { StickyHeader } from "./components/StickyNote/components";
import { StickyRegion } from "./components/StickyRegion";

const DEFAULT_NOTE_WIDTH = 160;
const DEFAULT_NOTE_HEIGHT = 160;

/**
 *
 * @param {object} props
 * @param {() => Promise<Note[]>} props.getNotes
 * @param {(notes: Note[]) => Promise<any>} props.saveNotes
 * @returns {JSX.Element}
 */
export const HomeScreen = ({ getNotes, saveNotes }) => {
  /** @type {[Partial<Note>, React.Dispatch<React.SetStateAction<Partial<Note>>>]} */
  const [preview, setPreview] = useState(null);
  const { data: notes = [] } = useQuery(["notes"], getNotes);
  const { updateCache } = useCacheInvalidation(["notes"], 100);
  /** @param {string} text */
  const addNote = (text) => {
    if (!text) {
      return;
    }
    const newNotes = [
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
    ];
    saveNotes(newNotes);
    setPreview(null);
    updateCache(() => newNotes);
  };
  /** @param {Partial<Note>} note */
  const editNote = (note) => {
    const newNotes = notes.map((n) =>
      n.id === note.id ? { ...n, ...note } : n
    );
    console.log(note);
    saveNotes(newNotes);
    updateCache(() => newNotes);
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

HomeScreen.defaultProps = {
  getNotes: async () => JSON.parse(localStorage.getItem("notes") || "[]"),
  saveNotes: async (notes) =>
    localStorage.setItem("notes", JSON.stringify(notes))
};
