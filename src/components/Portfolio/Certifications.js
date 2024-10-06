import React from 'react'

function Certifications() {
  return (
    <div>  	  
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
  )
}

export default Certifications