import { createRoot } from 'react-dom/client'
import { App } from './ui/App'

const rootElement = document.querySelector('#root')

if (!rootElement) {
  throw new Error('Failed to find root element')
}

const root = createRoot(rootElement)

root.render(<App />)
