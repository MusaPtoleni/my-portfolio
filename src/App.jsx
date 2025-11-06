import Navbar from "./components/Navbar/Navbar"
import Main from "./Pages/Main/Main"
import Stacks from "./Pages/Stacks/Stacks"
import Projects from './Pages/Projects/Projects'
import Contact from "./Pages/Contact/Contact"
import Footer from "./components/Footer/Footer"

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
