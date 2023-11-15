/* eslint-disable import/no-unresolved */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { createRoot } from 'react-dom/client'

import '@style/style.scss'
import '@style/style-reset.scss'

// Render your React component instead
const root = createRoot(document.getElementById('app')!)
root.render(<h1>Hello, world</h1>)
