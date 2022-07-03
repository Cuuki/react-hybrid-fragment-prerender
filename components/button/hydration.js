import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./button";

ReactDOM.hydrateRoot(document.getElementById('buttonRoot'), React.createElement(Button, {ariaLabel: '{{ .AriaLabel }}'}, '{{ .Name }}'))
