import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [home, setHome] = useState(true)


  return (
      <div>
          <div className='p-5 flex gap-5 justify-between'>
              <h2 className=' text-center font-bold text-2xl bg-gray-950' >{home ? "Media Search":'Collections'}</h2>
              <div className='font-semibold flex gap-5 '>
                  <Link to='/' id='search' className={`${home ? 'bg-gray-400' : 'bg-gray-600'} rounded px-3 p-1 active:scale-95`} onClick={() => { setHome(true) }}>Search</Link>
                  <Link to='/collection' id='collection' className={`${home ? 'bg-gray-600' : 'bg-gray-400'} px-3 p-1 rounded active:scale-95`} onClick={() => { setHome(false) }}>Collection</Link>
              </div>
          </div>
    </div>
  )
}

export default Header