import { createRoot } from 'react-dom/client'

const rootElement = document.querySelector('#root')

if (!rootElement) {
  throw new Error('Failed to find root element')
}

const root = createRoot(rootElement)

root.render(
  <div>
    <h1>Hello World!</h1>
  </div>,
)
