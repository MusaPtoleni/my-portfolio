import "./Project.css";
import Ecommerce from "../../assets/images/project1.png";
import Kafre from "../../assets/images/Project2.png";
import { IoLogoChrome } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { Link } from "react-router";


function Projects() {

  const projects = [
    {
      id: "101",
      image: `${Ecommerce}`,
      name: "eComerce Project",
      about:
        "In this project, I built an eCommerce web app to help my mother advertise her handmade products. I focused on improving my vanilla CSS and JavaScript skills during development. Although this is just a prototype, the actual website is currently being planned.",
      stacks: ["Html", "CSS", "Javascript"],
      website: "https://snobids.netlify.app/",
      repo: 'https://github.com/MusaPtoleni/sno-bids.git',
    },
    {
      id: "102",
      image: `${Kafre}`,
      name: "Business Project (Contributed)",
      about:
        "In this project I helped out with some part of this website using html, css and bootstrap for a smooth responsive website. I've been given a task to revamp this website with the use of React ",
      stacks: ["Html", "CSS", "Javascript", "Bootstrap"],
      website: "http://kafretelecom.co.za/",
      repo: ''
    },
  ];


  return (
    <article className="projects">
{/* Title */}
      <div className="project-title">
        <h2>Projects</h2>
        <p>
          I'm constantly looking for ways to improve, these projects show how
          far I've come since I started as a developer.
        </p>
      </div>
{/* Cards */}
      <div className="project-cards">
        {projects.map((project) => {
          return (
            <div className="project-card" key={project.id}>
              <img src={project.image} />
              <h4>{project.name}</h4>
              <p>{project.about}</p>

              <ul>
                {project.stacks.map((stack, i) => {
                  return <li key={i}>{stack}</li>;
                })}
              </ul>
{/* buttons */}
              <div className="project-btn">
                <button className="transparent-btn">
                  <a href={project.website}>
                    <IoLogoChrome className="menuIcons"/>
                    Visit Site
                  </a>
                </button>
                <button className="normal-btn">
                  <Link to={project.repo}>
                    <FaCode className="menuIcons"/>
                    Source Code
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Projects;
