import React from "react";

export default ({ariaLabel, children}) => (
    <button
        aria-label={ariaLabel}
        onClick={() => alert('Button click')}
    >
        Hello{' '}{children}!
    </button>
)
