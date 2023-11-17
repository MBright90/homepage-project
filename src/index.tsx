/* eslint-disable import/no-unresolved */
import { createRoot } from 'react-dom/client'

import App from './app'

import '@style/style.scss'
import '@style/style-reset.scss'

// Render your React component instead
const root = createRoot(document.getElementById('app')!)
root.render(<App />)
