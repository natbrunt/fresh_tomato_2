import React from 'react'
import logo from '../logo.svg';
import Projects from './Portfolio/Projects.js';

function Header() {
return (
<div 
className="
md:flex-row flex flex-col items-center">
  <section>
    <img src={logo} className="max-w-[18rem]" alt="logo" />
    <h1 className="font-bold text-4xl text-center">Hi, I'm Nate! <br/> <code className="text-2xl">Security Analyst / Python / Javascript Programmer</code></h1>
    <p className="my-5 mx-5 text-center max-w-[30rem]">
        I enjoy solving technical problems,
        learning, and discovering in the field of Computer Science.
    </p>
  </section>
  <section>
    <Projects />
  </section>
</div>
  )
}

export default Header