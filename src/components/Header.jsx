import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='w-full bg-white flex justify-between p-4'>
        <div>Logo</div>
        <Navbar/>
    </div>
  )
}

export default Header