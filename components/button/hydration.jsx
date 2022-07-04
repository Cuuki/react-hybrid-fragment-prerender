import React from "react";
import ReactDOM from "react-dom/client";
import config from "./config.json";
import Button from "./button";

const DATA = process.env.FRAGMENT_DATA || {};

ReactDOM.hydrateRoot(document.getElementById(config.fragmentRootId), <Button
    ariaLabel={DATA.body.labelText}
>{DATA.body.name}</Button>)
