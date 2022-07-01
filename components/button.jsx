import React from 'react';

const Button = ({ariaLabel}) => (
    <button
        aria-label={ariaLabel}
        onClick={() => alert('Button click')}
    >
        {'Hello {{ .Params.body.name }}!'}
    </button>
)

export default Button
