import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Settings from './components/Settings/Settings.tsx'
import NotFound from './components/NotFound/NotFound.tsx'
import NewChat from './components/NewChat/NewChat.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/settings",
    element: <Settings />
  },
  {
    path: "/new-chat",
    element: <NewChat />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/daniilshamraev/PSBJson/main/manifest.json" language='ru'>
      <RouterProvider router={router} />
      <footer style={{ marginTop: 20, }}>
        <code>Write by <a href="https://t.me/on_plc">Daniil Shamraev</a></code>
      </footer>
    </TonConnectUIProvider>
  </React.StrictMode>,
)
