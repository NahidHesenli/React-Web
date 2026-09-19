import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='flex flex-col relative h-90 w-90'>
        <div className='bg-[#DC95FF] w-30 h-30 rounded-[50%] absolute top-[10%] right-[10%] ball1'></div>
        <div className='bg-[#8C56D4] w-30 h-30 rounded-[50%] absolute top-[10%] left-[10%] ball2'></div>
        <div  className='bg-[#FFBEFB] w-30 h-30 rounded-[50%] absolute bottom-[10%] left-[10%] ball3'></div>
        <div className='bg-[#FFF4BF] w-30 h-30 rounded-[50%] absolute bottom-[10%] right-[10%] ball4'></div>
      </div>
    </div>
  )
}

export default Loading