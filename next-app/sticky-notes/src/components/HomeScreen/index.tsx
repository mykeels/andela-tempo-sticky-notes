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
import { Note } from "../../common/sticky-note.model";


type HomeScreenProps = {
  getNotes: () => Promise<Note[]>;
  saveNotes: (notes: Note[]) => Promise<any>;
}

type NotePreview = Omit<Note, "id" | "text" | "date">;

export const HomeScreen = ({ getNotes, saveNotes }: HomeScreenProps) => {
  const [preview, setPreview] = useState<NotePreview | null>(null);
  const { data: notes = [] } = useQuery(["notes"], getNotes);
  const { updateCache } = useCacheInvalidation(["notes"], 100);
  const { setCallback } = useContext(DeleteContext);
  const addNote = (text: string) => {
    if (!text || !preview) {
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
  const editNote = (note: Note) => {
    const newNotes = notes.map((n) =>
      n.id === note.id ? { ...n, ...note } : n
    );
    saveNotes(newNotes);
    updateCache(() => newNotes);
  };
  const deleteNote = (note: Note) => {
    const newNotes = notes.filter((n) => n.id !== note.id);
    saveNotes(newNotes);
    updateCache(() => newNotes);
  };
  return (
    <StickyRegion
      className="relative"
      onDoubleClick={(e) => {
        if (preview) {
          setPreview({
            ...preview,
            color: "blue",
            zIndex: 1,
            position: {
              top: e.y - Math.floor(DEFAULT_NOTE_HEIGHT / 4),
              left: e.x - Math.floor(DEFAULT_NOTE_WIDTH / 2)
            }
          });
        }
      }}
    >
      <>
        {preview ? (
          <StickyNote
            note={{
              ...preview,
              text: "",
              size: {
                width: DEFAULT_NOTE_WIDTH,
                height: DEFAULT_NOTE_HEIGHT,
              }
            }}
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
                ...preview,
                size
              })
            }
            className="absolute"
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
} as Partial<HomeScreenProps>;
