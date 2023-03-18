export type NoteColor = "blue" | "lime" | "yellow" | "green";

export type NotePosition = { top: any; left: any };

export type NoteSize = { width: number; height: number };

export type Note = {
  id: string;
  date: Date;
  text: string;
  color: NoteColor;
  position: NotePosition;
  size: NoteSize;
  zIndex: number;
};

export type NotePreview = Omit<Note, "id" | "text" | "date">;