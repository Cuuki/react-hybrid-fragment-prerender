import React from 'react';

const Button = ({ariaLabel, children}) => (
    <button
        aria-label={ariaLabel}
        onClick={() => alert('Button click')}
    >
        Hello{' '}{children}!
    </button>
)

export default Button
