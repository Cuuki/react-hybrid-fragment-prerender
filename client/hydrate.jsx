import React from 'react'
import ReactDOM from 'react-dom/client'

const hydrate = (element, props, children, rootId) => {
    ReactDOM.createRoot(document.getElementById(rootId)).render(
        React.createElement(element, props, children)
    )
}

export default hydrate
