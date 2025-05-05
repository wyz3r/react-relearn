import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { HooksApp } from './HooksApp.jsx'
import './index.css'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import s{ Layout } from './05-useLayoutEffect.jsx/layout'
// import { Memorize } from './06-memo/Memorize'
// import { MemoHook } from './06-memo/MemoHook'
import { CallbackHook } from './06-memo/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
// import { MultipleCustomHooks } from './03-exameples/MultipleCustomHooks.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Padre />
  </StrictMode>,
)
