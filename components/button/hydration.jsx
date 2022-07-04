import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./button";

const DATA = process.env.BUTTON_DATA || {};

ReactDOM.hydrateRoot(document.getElementById('buttonRoot'), <Button
    ariaLabel={DATA.body.labelText}
>{DATA.body.name}</Button>)
