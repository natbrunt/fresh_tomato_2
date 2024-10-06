import React from 'react';

import calcImage from '../../Images/calc.jpg'
import polyImage from '../../Images/poly.jpg'
import ecomImage from '../../Images/ecom.jpg'
import noteImage from '../../Images/note.jpg'
import clockImage from '../../Images/clock.jpg'
import AIwriter from '../../Images/AIwriter.png'
import videoAI from '../../Images/videoAI.png'
	

	


function Projects(){
return(
<div 
className="
flex flex-col items-center 
font-bold gap-y-2">

    <h1 
    className="
    font-bold text-3xl 
    mt-5 underline text-center italic"
    >Projects</h1>
    
    {/* revise to make this a row of 3 */}
    
    <div id="row of 3"
    className='
    flex-row flex 
    '
    >
        {/* Pop up start */}
        <section id='Pop up image'
            className="
            relative
            outline outline-2 rounded-3xl

            ">

            <img src={videoAI}
                alt="company" loading="lazy"
                className='
                grow
                max-w-[130px]
                min-h-[450px]
                md:max-w-[300px]
                md:min-h-[650px]
                lg:max-w-[350px]
                lg:min-h-[650px]
                xl:max-w-[400px]
                xl:max-h-[700px]
                
                rounded-2xl object-cover'/>


            <div class="
                absolute top-0 left-0 right-0 bottom-0 
                flex flex-col justify-between font-bold
                py-5 px-6">
                
                <h1 
                    className='
                    xl:text-5xl md:text-[2rem] text-2xl md:max-w-[600px]
                    text-black'>
                    Frontend AI web app
                </h1>
                <div className=''>
                    <button 
                    className="
                    xl:w-60 xl:h-16 xl:text-xl md:w-28 md:h-10
                    w-28 h-8
                    outline outline-black outline-2 rounded-full text-black
                    hover:bg-black transition-all duration-300 ease-in-out hover:text-white
                    ">
                    View
                    </button>
                </div>

            </div>

        </section>
        {/* Pop up end */}


    </div>

    <div 
    className="
    flex flex-row items-center font-bold gap-y-2">
        {/* sm: flex-row 
        Could I wrap a div around two elements 
        and have it set to flex row
        Then on medium screens display 3 per row?
        */}

        {/* <a 
        className="
        text-center mt-2 text-2xl"
        >Polygon Area Calculator 
        <img 
        className="
        rounded-2xl border-4 border-white 
        mt-2 p-2 bg-black" 
        src={polyImage}></img> 
        </a> */}

        {/* <a 
        className="text-center mt-2 text-2xl">
        Ecommerce
        <img className="
        rounded-2xl border-4 border-white mt-2 w-96" 
        src={ecomImage}></img> 
        </a>

        <a 
        className="
        text-center mt-2 text-2xl" 
        href="https://codepen.io/njbee/details/xxoRLYy">
        JS Calculator 
        <img 
        className="
        rounded-2xl border-4 border-white 
        mt-2 w-96" src={calcImage}>
        </img> 
        </a>

        <a 
        className="
        text-center mt-2 text-2xl" 
        href="https://codepen.io/njbee/pen/vYqgdPy">
        Pomodoro Clock 
        <img 
        className="
        rounded-2xl border-4 border-white 
        mt-2 w-96" 
        src={clockImage}>
        </img>
        </a>

        <a 
        className="
        text-center mt-2 text-2xl">
        Note Taker 
        <img 
        className="
        rounded-2xl border-4 border-white 
        mt-2 w-96" 
        src={noteImage}>
        </img>
        </a> */}

    </div>

    <p>You can find more information about these projects on my
        <a href="https://github.com/yourusername">Github</a> page.
    </p>
    <p>And if you're interested in learning more about web development, 
        I recommend checking out
        <a href="https://www.freecodecamp.org/"> FreeCodeCamp </a> 
        or <a href="https://www.codecademy.com/">Codecademy</a>.
    </p>
</div>
)
}

export default Projects