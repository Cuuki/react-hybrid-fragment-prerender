import React from 'react';
import Button from "./button";

export default () => (
    <div id="buttonRoot">
        <Button
            ariaLabel={'{{ .AriaLabel }}'}
        >
            {'{{ .Name }}'}
        </Button>
    </div>
)
