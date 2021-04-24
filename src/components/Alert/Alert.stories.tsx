import React from "react";

import { Alert } from "./index";

export default {
  title: "Alert",
};

export const Success = () => <Alert>Atauine</Alert>;

export const Danger = () => <Alert danger>Piriri</Alert>;
