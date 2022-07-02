import React from 'react';
import Button from "./button";

const ButtonContainer = () => (
    <Button
        ariaLabel={'{{ .AriaLabel }}'}
    >
        {'{{ .Name }}'}
    </Button>
)

export default ButtonContainer
