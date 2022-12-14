import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { v4 as uuid } from "uuid";

import { DeleteContext } from "../../common/contexts/delete.context";
import { useCacheInvalidation } from "../../hooks";
import {
  DEFAULT_NOTE_HEIGHT,
  DEFAULT_NOTE_WIDTH,
  StickyNote
} from "./components/StickyNote";
import { StickyHeader } from "./components/StickyNote/components";
import { StickyRegion } from "./components/StickyRegion";

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
  const { setCallback } = useContext(DeleteContext);
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
    saveNotes(newNotes);
    updateCache(() => newNotes);
  };
  /** @param {Partial<Note>} note */
  const deleteNote = (note) => {
    const newNotes = notes.filter((n) => n.id !== note.id);
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
            // @ts-ignore
            note={preview}
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
            {...{
              onDragStart: () => {
                setCallback(() => () => {
                  setPreview(null);
                });
              }
            }}
          ></StickyNote>
        ) : null}
      </>
      {notes.map((note) => (
        <StickyNote
          key={note.id}
          className="absolute"
          note={note}
          Header={() => (
            <StickyHeader
              color={note.color}
              zIndex={note.zIndex}
              date={note.date}
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
          {...{
            onDragStart: () => {
              setCallback(() => () => {
                if (confirm("Are you sure you want to delete this note?")) {
                  deleteNote(note);
                }
              });
            }
          }}
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
