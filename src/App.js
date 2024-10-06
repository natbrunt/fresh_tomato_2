
import React from 'react';


import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Badges from './components/Portfolio/Badges.js';
import Certifications from './components/Portfolio/Certifications.js';
import Skills from './components/Portfolio/Skills.js';

function App() {


return (
<div 
	id=""
	className="">
	<header
	className='
		md:flex-row flex flex-col'>
		<Header/>
		
	</header>
	

	
	<Certifications />

	<Skills />

	

	<Badges />

	<Footer />

	
</div>
);
}

export default App;
