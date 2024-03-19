import React from 'react'

export const product = ({age,data}) => {
 const [a,b] = useState(false);
  return (

    <div>
      <h4 className={`${a}`}>{a === false ? "Hello" : "Hey"}</h4>
      <button onClick={()=>b(!a)}>Change</button>
    </div>
  )
}

