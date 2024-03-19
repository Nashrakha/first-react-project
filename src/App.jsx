import React, { useState } from 'react';
function App() {
  var [a, b] = useState(69);
  return (
    <div>
    <div className="w-100 h-100 bg-dark text-white">
      <h1>{a}</h1>
      <button onClick={()=>b(a+1)} className='px-5 bg-primary py-2'>Click</button>
    </div>
    </div>
  )
}

export default App