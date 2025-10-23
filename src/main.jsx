import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from './Pages/Main/Main.jsx';
import Stacks from './Pages/Stacks/Stacks.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import About from './Pages/About/About.jsx';

const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"/contact", element: <Contact/>},
  {path:"/about", element: < About/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
