import './Stacks.css'


function Stacks(){


    const myStacks = [
        {key: "1",stack: "Html", experience: "1 year experience"},
        {key: "2",stack: "CSS", experience: "1 year experience"},
        {key: "3",stack: "Javascript", experience: "1 year experience"},
        {key: "4",stack: "MERN", experience: "1 year experience"},
        {key: "5",stack: "Java", experience: "1 year experience"},
        {key: "6",stack: "MySql", experience: "1 year experience"},
        {key: "7",stack: "Next.js", experience: "5 months experience"},
        {key: "8",stack: "WordPress", experience: "6 months experience"},
        {key: "9",stack: "Bootstrap", experience: "1 year experience"},
        {key: "10",stack: "Jest", experience: "1 year experience"},
    ];


    return(
       <section className='stacks'>
            <div className='stack-title'>
                <h1>My Tech Stacks</h1>
                <p id='tools'>Tools I use to turn ideas into polished, production-ready products.</p>
            </div>
            <ul>
                {myStacks.map((stacks) => {
                    return(
                        <li key={stacks.key} className="box">
                            <h2>{stacks.stack}</h2>
                            <p>{stacks.experience}</p> 
                        </li>
                    )
                }
            )}
            </ul>
        </section>
    )
}

export default Stacks;