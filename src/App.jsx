import Navbar from "./components/Navbar/Navbar"
import Main from "./Pages/Main/Main"
import Stacks from "./Pages/Stacks/Stacks"
import Projects from './Pages/Projects/Projects'
import Contact from "./Pages/Contact/Contact"
import About from "./Pages/About/About"
import Footer from "./components/Footer/Footer"
import Menu from "./components/Menu/Menu"

function App() {

  return (
    <>
      <Navbar />
      <Main/>
      <Stacks/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
