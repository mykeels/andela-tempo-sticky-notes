import React, { useState } from "react";

import { StickyHeader } from "./";

export default {
  title: "components/StickyNote/components/StickyHeader",
  component: StickyHeader
};

export const Index = () => {
  const [color, setColor] = useState("blue");
  const [zIndex, setZIndex] = useState(1);

  return (
    <StickyHeader
      color={color}
      zIndex={zIndex}
      onColorChange={setColor}
      onZIndexChange={setZIndex}
      isExpanded
    />
  );
};

export const Blue = () => (
  <StickyHeader
    color="blue"
    onColorChange={console.log}
    onZIndexChange={console.log}
  />
);

export const Lime = () => (
  <StickyHeader
    color="lime"
    onColorChange={console.log}
    onZIndexChange={console.log}
  />
);

export const Green = () => (
  <StickyHeader
    color="green"
    onColorChange={console.log}
    onZIndexChange={console.log}
  />
);

export const Yellow = () => (
  <StickyHeader
    color="yellow"
    onColorChange={console.log}
    onZIndexChange={console.log}
  />
);

export const ExpandedBlue = () => (
  <StickyHeader
    color="blue"
    onColorChange={console.log}
    onZIndexChange={console.log}
    isExpanded
  />
);

export const ExpandedLime = () => (
  <StickyHeader
    color="lime"
    onColorChange={console.log}
    onZIndexChange={console.log}
    isExpanded
  />
);

export const ExpandedGreen = () => (
  <StickyHeader
    color="green"
    onColorChange={console.log}
    onZIndexChange={console.log}
    isExpanded
  />
);

export const ExpandedYellow = () => (
  <StickyHeader
    color="yellow"
    onColorChange={console.log}
    onZIndexChange={console.log}
    isExpanded
  />
);

export const WithOpenControls = () => (
  <StickyHeader
    color="yellow"
    onColorChange={console.log}
    onZIndexChange={console.log}
    defaults={{
      focused: true
    }}
    isExpanded
  />
);
