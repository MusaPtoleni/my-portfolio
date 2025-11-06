import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import GetInTouch from './Pages/Get-in-Touch/GetInTouch.jsx'
import About from './Pages/About/About.jsx';

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/get-in-touch", element: <GetInTouch/>},
  {path:"/about", element: < About/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
