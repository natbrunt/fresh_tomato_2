import logo from './logo.svg';
import './App.css';
import { SocialIcon } from "react-social-icons";
import isc2 from './Images/isc2_candidate.png';
import React, { useEffect, useState } from 'react';
import calcImage from './Images/calc.jpg'
import polyImage from './Images/poly.jpg'
import ecomImage from './Images/ecom.jpg'
import noteImage from './Images/note.jpg'
import clockImage from './Images/clock.jpg'
import AIwriter from './Images/AIwriter.png'
import videoAI from './Images/videoAI.png'

function App() {


const handleEmailClick = () => {
    const email = 'nathanieljbrunnett@gmail.com';
    const subject = 'Hello from React';
    const body = 'This is a test email sent from a React app.';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

const CertsComp = <div>  	  
	<h1 className="font-bold text-3xl mt-5 underline text-center mb-2">Certifications</h1>
	<div className="flex flex-col items-center space-y-8">

	  <div className="text-center">
	    <h1 className="max-w-md">Developer Certification of <b>Scientific Computing with Python</b> at FreeCodeCamp.org</h1>
	    <h2 className='text-sm'>Sept 25, 2024</h2>
	  </div>

	  <div className="text-center">
	    <h1 className="max-w-md">Developer Certification of <b>Front End Development Libraries</b> at FreeCodeCamp.org</h1>
	    <h2 className='text-sm'>August 4, 2024</h2>
	  </div>
	  
	  <div className='text-center'>
	    <h1 className='max-w-md'>Certificate of Completion in the <b>Certified in Cybersecurity</b>  at Isc2.org</h1>
	    <h2 className='text-sm'>July 19, 2024</h2>
	  </div> 
	
      <div className='text-center'> 
	    <h1 className="max-w-md">Successful completion of the <b>JavaScript Full-Stack Bootcamp
		</b> at Barcelona Code School</h1>
        <h3 className='text-sm'>February 8, 2024</h3>
	  </div>

    </div>
</div>

const SkillsComp = <div>
	<h1 className="font-bold text-3xl mt-5 underline text-center w-72 italic">Skills</h1>
	
	<div id="skill section"
	className="flex flex-row justify-between">
		<h1 id="skill">Python</h1>
		<h1 id="%">75%</h1>
	</div>
	
	<div id="skill section"
	className="flex flex-row justify-between">
		<h1 id="skill">React</h1>
		<h1 id="%">75%</h1>
	</div>

	<div id="skill section"
	className="flex flex-row justify-between">
		<h1 id="skill">JavaScript</h1>
		<h1 id="%">60%</h1>
	</div>

	<div id="skill section"
	className="flex flex-row justify-between">
		<h1 id="skill">Tailwind css</h1>
		<h1 id="%">75%</h1>
	</div>

	<div id="skill section"
	className="flex flex-row justify-between">
		<h1 id="skill">Git</h1>
		<h1 id="%">66%</h1>
	</div>

	<div id="skill section"
	className="flex flex-row justify-between">
		<h1 id="skill">HTML</h1>
		<h1 id="%">66%</h1>
	</div>

	<div id="skill section"
	className="flex flex-row justify-between">
		<h1 id="skill">CSS</h1>
		<h1 id="%">66%</h1>
	</div>
	<div id="skill section"
	className="flex flex-row justify-between">
		<h1 id="skill">MongoDb</h1>
		<h1 id="%">45%</h1>
	</div>
	<div id="skill section"
	className="flex flex-row justify-between">
		<h1 id="skill">NodeJS</h1>
		<h1 id="%">33%</h1>
	</div>
	<div id="skill section"
	className="flex flex-row justify-between">
		<h1 id="skill">Express</h1>
		<h1 id="%">25%</h1>
	</div>
	<div id="skill section"
	className="flex flex-row justify-between">
		<h1 id="skill">Word & Excel</h1>
		<h1 id="%">25%</h1>
	</div>
</div>

const ProjectExpComp = <div className="flex flex-col items-center font-bold gap-y-2">
	<h1 className="font-bold text-3xl mt-5 underline text-center italic">Project Experience</h1>
	<a 
		className="text-center mt-2 text-2xl">
		Frontend AI web app 
		<img 
			className="
			max-w-[36rem]
			rounded-2xl border-4 border-white 
			mt-2 w-81 h-81 p-2 bg-black" 
			src={videoAI}></img>
	</a>
	<a 
		className="text-center mt-2 text-2xl">
		Free AI Writer  
		<img 
			className="
			max-w-[36rem]
			rounded-2xl border-4 border-white 
			mt-2 w-81 h-81 p-2 bg-black" 
			src={AIwriter}></img>
	</a>
	<a className="text-center mt-2 text-2xl">Polygon Area Calculator 
		<img className="rounded-2xl border-4 border-white mt-2 w-81 h-81 p-2 bg-black" src={polyImage}></img> </a>
	<a className="text-center mt-2 text-2xl">Ecommerce
		<img className="rounded-2xl border-4 border-white mt-2 w-96" src={ecomImage}></img> </a>
	<a className="text-center mt-2 text-2xl" href="https://codepen.io/njbee/details/xxoRLYy">JS Calculator 
		<img className="rounded-2xl border-4 border-white mt-2 w-96" src={calcImage}></img> </a>
	<a className="text-center mt-2 text-2xl" href="https://codepen.io/njbee/pen/vYqgdPy">Pomodoro Clock 
		<img className="rounded-2xl border-4 border-white mt-2 w-96" src={clockImage}></img></a>
	<a className="text-center mt-2 text-2xl">Note Taker 
		<img className="rounded-2xl border-4 border-white mt-2 w-96" src={noteImage}></img></a>
	
</div>

  return (
    <div className="h-auto text-white bg-slate-800">
      <header className="flex flex-col items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="font-bold text-4xl text-center">Hi, I'm Nate! <br/> <code className="text-2xl">Security Analyst / Python / Javascript Programmer</code></h1>
	<p className="my-5 mx-5 text-center max-w-[30rem]">
	  I enjoy solving technical problems,
	  learning, and discovering in the field of Computer Science.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="flex flex-col items-center">
	{CertsComp}

	{SkillsComp}

	{ProjectExpComp}
	  <h1 className="font-bold text-3xl mt-5 underline italic">Badges</h1>
	  <div
	   className="mt-2">
		<img src={isc2}
		className="max-w-16 bg-white rounded-xl p-2" />
	  </div>

	<footer className="mt-10 mb-5 bg-slate-800 w-auto flex flex-col justify-center">
	  <button
	    onClick={handleEmailClick}
	    className="bg-white text-black p-2 font-bold rounded-xl"
	  >Send me an email</button>

	  <div className="flex flex-row items-center">
	    <h1>Links to software via <code>Github</code></h1>
 		<SocialIcon
                    url="https://www.github.com/natbrunt"
                    bgColor="transparent"
                    fgColor="
                    #FFC7C7"
                    />
	  </div>
	</footer>

     </div>
   </div>
  );
}

export default App;
