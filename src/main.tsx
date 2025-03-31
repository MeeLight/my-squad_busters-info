import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Father Component
import App from '@app/module'

// Global Stylesheet
import './styles/reset.css'

const rootEl = document.getElementById('root') as HTMLDivElement | null

if (rootEl) {
  const root = createRoot(rootEl)

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
