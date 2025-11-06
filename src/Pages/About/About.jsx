import "./About.css"
import AboutIMG from '../../assets/images/about2.png'
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"


const About = () => {
  return (
      <article className="about">
        <Navbar/>
        <div className="about-container">
        <div className='about-title'>
          <h1>About Me</h1>
          <img src={AboutIMG} /> 
          </div>
          <div className='journey'>

            <details>
              <summary>Why Programming?</summary>
              <p className='about-text'>
                I've always been the kid who took things apart just to see how they worked. Remote controls, toys, anything I could get my hands on I needed to understand what was happening under the hood. That curiosity eventually led me down a rabbit hole: figuring out how those addictive Java games on Nokia and Motorola phones actually worked. That moment of discovery, That's when I realized I wanted to build things, not just break them down.
              </p>
            </details>

            <details>
              <summary>How I Got Here?</summary>
              <p className='about-text'>
                Fast forward a few years, and I found myself diving headfirst into the world of coding. Starting with HTML and CSS, I quickly moved on to JavaScript, Java, and beyond. Each new language was like unlocking a new level in a game, revealing more possibilities and challenges. I spent countless hours experimenting with different frameworks and libraries, always eager to learn more and push my skills further.
              </p>
            </details>

            <details>
              <summary>What I'm Working On?</summary>
              <p className='about-text'>
                Today, I'm a passionate software developer with a knack for problem-solving and a love for creating intuitive user experiences. Whether it's building a sleek web application or diving into backend development, I thrive on the challenges that come with coding. My journey is far from over, and I'm excited to see where this path takes me next.
              </p>
            </details>
            
          </div>
        </div>
        <Footer/>
      </article>
  )
}

export default About
