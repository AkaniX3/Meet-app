import React from 'react'
import { LoaderCircle } from 'lucide-react';

const Loader = () => {
  return (
    <div className='flex-center h-screen w-full text-white'>
        <LoaderCircle width={50} height={50} />  
    </div>
  )
}

export default Loader