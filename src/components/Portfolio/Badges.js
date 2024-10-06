import React from 'react'
import isc2 from '../../Images/isc2_candidate.png';
function Badges() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-5 underline italic">Badges</h1>
	  <div
	   className="mt-2">
		<img src={isc2}
		className="max-w-16 bg-white rounded-xl p-2" />
	  </div>
    </div>
  )
}

export default Badges