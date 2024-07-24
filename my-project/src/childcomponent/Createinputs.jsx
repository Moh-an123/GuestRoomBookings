import { Input } from '@nextui-org/react';
import React, { useState } from 'react'

const Createinputs = ({inputs}) => {
  const [element,setElement]=useState(inputs);
  const Output=element.map((val)=>{
    // return(<Input className='mb-4' label={} name={} type={})
  })
    return (
    <div>
      
    </div>
  )
}

export default Createinputs
