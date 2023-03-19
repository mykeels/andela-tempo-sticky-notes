import React, { useState } from "react";
import { StickyHeader } from "./components";
import { NoteColor, NotePreview } from "../../../../common";


import { StickyNote } from "./index";

export default {
  title: "components/StickyNote",
  component: StickyNote
};

const Header = (props: { color?: NoteColor }) => {
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

export const Index = () => (
  <StickyNote
    onResize={console.log}
    onChange={console.log}
    Header={() => <Header />}
  />
);

export const CustomSize = () => (
  <StickyNote
    onResize={console.log}
    onChange={console.log}
    note={{
      text: "",
      size: {
        width: 320,
        height: 320
      }
    } as any}
    Header={() => <Header />}
  />
);
