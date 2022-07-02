import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from "../components/button.jsx";

ReactDOM.createRoot(document.getElementById('buttonRoot')).render(
    <React.StrictMode>
        <Button ariaLabel="click me">John Doe</Button>
    </React.StrictMode>
)
