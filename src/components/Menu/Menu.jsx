import './Menu.css'
import { Link } from 'react-router';
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdContactPage } from "react-icons/md";
import { IoIosMan } from "react-icons/io";
import { BiGitRepoForked } from "react-icons/bi";


export default function Menu(props) {
    const flex = props.display
    

  return (
    <div className='menu' style={{display:flex}}>
      <ul>
        <li>
            <BiGitRepoForked className='menuIcons'/>
            <Link to='/git-repo'>Git Repo</Link>
        </li>
        <li>
            <IoIosMan className='menuIcons'/>
            <Link to='/about'>About</Link> 
        </li>
        <li>
            <MdContactPage className='menuIcons'/>
            <Link to='contact'>Contact</Link> 
        </li>
      </ul>
      <div className='socials'>
        <a href="https://github.com/MusaPtoleni"><SlSocialGithub id='git'/></a>
        <a href="https://www.linkedin.com/in/musa-toleni-01b920226/"><SlSocialLinkedin id='linkedin'/></a>
      </div>
    </div>
  )
}
