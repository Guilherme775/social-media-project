import React from "react";

import { AlertStorybook } from "./index";

export default {
  title: "Alert",
};

export const Success = () => <AlertStorybook>Atauine</AlertStorybook>;

export const Danger = () => <AlertStorybook danger>Piriri</AlertStorybook>;
