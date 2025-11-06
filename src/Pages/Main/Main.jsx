import './Main.css'
import Laptop from '../../assets/images/hello.png'

function Main(){
    return(
        <main className='home-page'>
            <div className='title'>
                <h1>Full Stack Developer</h1>
                <p>Hi, I’m Musa, a Junior Full Stack Developer skilled in HTML, CSS, JavaScript, Java, React, MySQL, MongoDB, Express.js and Node.js.</p>
            </div>
            <div className='images'>
                <img src={Laptop} alt='laptop'/>
            </div>
        </main>
    )
}

export default Main;