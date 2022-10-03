declare type NoteColor = "blue" | "lime" | "yellow" | "green";
declare type NotePosition = { top: any; left: any };
declare type NoteSize = { width: number; height: number };
declare type Note = {
  id: string;
  date: Date;
  text: string;
  color: NoteColor;
  position: NotePosition;
  size: NoteSize;
  zIndex: number;
};
