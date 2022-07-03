import React from 'react';
import Button from "./button";

const ButtonContainer = () => (
    <div id="buttonRoot">
        <Button
            ariaLabel={'{{ .AriaLabel }}'}
        >
            {'{{ .Name }}'}
        </Button>
    </div>

)

export default ButtonContainer
