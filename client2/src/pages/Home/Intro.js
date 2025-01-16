import React from 'react'
import { useSelector } from 'react-redux';

function Intro({portfolioData}) {
    // const { loading , portfolioData} = useSelector((state) => state.root);
    const { intro } = portfolioData;
    //console.log("intro" , intro);
    const {firstName , lastName , caption , welcomeText ,description} = intro[0];
    //console.log("firstName" , firstName , lastName);
    return (
        <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 w-2/3'>
            <h1 className='text-white '>{welcomeText || "Hello , I am"}</h1>
            <h1 className='text-secondary text-7xl sm:text-3xl  font-semibold'>{firstName || "Shivangi" } {lastName || "Agrawal"}</h1> 
             <h1 className='text-black text-xl font-semibold'>{caption || "Programming isn't about what you know; it's about what you can figure out."}</h1>
            <p className='text-white w-2/3'>{description || "Accomplished engineer looking forward for an opportunity in a challenging environment, where I can utilise my people and project management experience and software development and problem solving skills to contribute effectively towards the success of an organisation and grow my skillset and experience."}</p>
                <button className='border-2 border-tertiary text-white px-10 py-3 rounded'> Get Started </button>
        </div>
    )
}

export default Intro
