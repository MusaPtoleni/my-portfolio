import "./About.css"
import AboutIMG from '../../assets/images/about.png'
import Navbar from '../../components/Navbar/Navbar'


const About = () => {
  return (
    <>
      <Navbar/>
      <article className="about">
        <div className='about-title'>
          <img src={AboutIMG} /> 
        </div>
        <div className='journey'>
          <p className='firstPara'>
              I've always been the kid who took things apart just to see how they worked. Remote controls, toys, anything I could get my hands on I needed to understand what was happening under the hood. That curiosity eventually led me down a rabbit hole: figuring out how those addictive Java games on Nokia and Motorola phones actually worked. That moment of discovery, That's when I realized I wanted to build things, not just break them down.
          </p>
          <p className='secondPara'>
            Today, I'm a junior full-stack developer working my way toward a career in DevOps. I love the full picture how code gets written, how it's deployed, how it scales, and how it all stays running smoothly. For me, development isn't just about writing features, it's about understanding the entire pipeline from localhost to production.
          </p>
          <p className='thirdPara'>
            That childhood habit of taking things apart never really went away I still love understanding how systems tick, whether it's debugging why a server went down or figuring out how streaming services handle millions of users. When I'm not at my computer, I'm probably playing FIFA, searching for new PC hardwares, playing soccer or taking a drive.
          </p>
        </div>
      </article>
    </>
  )
}

export default About
