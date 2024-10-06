import React from 'react'
import logo from '../logo.svg';
import Projects from './Portfolio/Projects.js';

function Header() {
return (
<header 
  className="
  h-screen
  lg:flex-row flex flex-col">
  <div id="Intro wrapper"
    className='
    flex flex-col justify-between
    xl:min-w-[58rem] lg:min-w-[48rem] min-w-[32rem]'>
      <div
        className='flex flex-row items-center'>
        <img src={logo} className="max-w-[18rem]" alt="logo" />
        <h1 className="font-bold text-4xl text-center">Hi, I'm Nate! <br/> <code className="text-2xl">Security Analyst / Python / Javascript Programmer</code></h1>
      </div>
      <p className="my-5 mx-5 text-center max-w-[30rem]">
        I enjoy solving technical problems,
        learning, and discovering in the field of Computer Science.
      </p>
  </div>
  
  <div
    className='
    bg-black
    text-white
    lg:min-w-1.5'
    >
    <Projects />
  </div>

</header>
  )
}

export default Header