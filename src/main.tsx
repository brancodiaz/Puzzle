import React from 'react'
import ReactDOM from 'react-dom/client'
import { Puzzle } from './Components/Puzzle/Puzzle.tsx'
import '@fontsource/roboto';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Puzzle />
  </React.StrictMode>,
)
