import hydrate from "./hydrate";
import Button from "../components/button";

hydrate(Button, {ariaLabel: '{{ .AriaLabel }}'}, '{{ .Name }}', 'buttonRoot')
