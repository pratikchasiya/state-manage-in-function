import React, { Fragment, useState } from 'react'

/* Function ma apre pehle thi bdhu run thse atle setTimeOut use kari saky kai pm update krsu to a pehel thi run krse */
const StateManageInFunction = () => {
  let [count , setCount] = useState(0)

    setTimeout(()=>{
        count += 1
        console.log(count)
        setCount(count)
   
    },1000)
  return (
   <Fragment>
  <h3>Count : {count}</h3>
   </Fragment>
  )
}

export default StateManageInFunction