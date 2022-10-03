import React from "react";

import { StickyNote } from "./index";

export default {
  title: "components/StickyNote",
  component: StickyNote
};

export const Index = () => <StickyNote onResize={console.log} />;
