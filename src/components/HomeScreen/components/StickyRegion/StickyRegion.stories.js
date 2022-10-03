import React from "react";

import { StickyRegion } from "./index";

export default {
  title: "components/StickyRegion",
  component: StickyRegion
};

export const Empty = () => <StickyRegion />;

export const WithContent = () => (
  <StickyRegion>
    <div>Hello World</div>
  </StickyRegion>
);
