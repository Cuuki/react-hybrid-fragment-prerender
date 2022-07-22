import React from "react";
import Button from "./button";
import config from "./config.json";

export default ({ ariaLabel, children }) => (
  <div id={config.fragmentRootId}>
    <Button ariaLabel={ariaLabel}>{children}</Button>
  </div>
);
