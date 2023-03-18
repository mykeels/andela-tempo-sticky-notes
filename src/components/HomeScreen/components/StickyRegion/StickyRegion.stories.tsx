import React from "react";

import { StickyRegion } from "./index";

export default {
  title: "components/StickyRegion",
  component: StickyRegion
};

export const Empty = () => <StickyRegion onDoubleClick={() => {}} />;

export const WithContent = () => (
  <StickyRegion onDoubleClick={() => {}}>
    <div>Hello World</div>
  </StickyRegion>
);
