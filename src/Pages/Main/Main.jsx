import './Main.css'
import Laptop from '../../assets/images/laptop.png'

function Main(){
    return(
        <main className='home-page'>
            <div className='title'>
                <h1>Full Stack Developer</h1>
                <p>Hi, I’m Musa, a Junior developer skilled in HTML, CSS, JavaScript, Java, React, MySQL, MongoDB, Express.js and Node.js.</p>
            </div>
            <img src={Laptop} alt='laptop'/>
        </main>
    )
}

export default Main;