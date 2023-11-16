/* eslint-disable import/no-unresolved */
import { createRoot } from 'react-dom/client'

import '@style/style.scss'
import '@style/style-reset.scss'

// Render your React component instead
const root = createRoot(document.getElementById('app')!)
root.render(<h1>Hello, world</h1>)
