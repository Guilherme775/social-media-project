import React from "react";

import { Button } from "./index";

export default {
  title: "Button",
};

export const Primary = () => (
  <Button width="120" height="52" font="16">
    Sign In
  </Button>
);

export const Small = () => (
  <Button width="80" height="52" font="16">
    Sign In
  </Button>
);
