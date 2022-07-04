import React from 'react';
import Button from "./button";

export default ({ariaLabel, children}) => (
    <div id="buttonRoot">
        <Button
            ariaLabel={ariaLabel}
        >
            {children}
        </Button>
    </div>
)
