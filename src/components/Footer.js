import React from 'react'

import { SocialIcon } from "react-social-icons";

function Footer() {
    
const handleEmailClick = () => {
    const email = 'nathanieljbrunnett@gmail.com';
    const subject = 'Hello from React';
    const body = 'This is a test email sent from a React app.';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
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
  )
}

export default Footer