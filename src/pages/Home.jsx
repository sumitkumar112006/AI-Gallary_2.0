import React, { useState } from 'react'
import SearchBox from '../components/SearchBox'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
  const { query } = useSelector((store) => store.search)
  

  return (
    <div className='w-full min-h-screen bg-gray-950 text-white'>
      
          <SearchBox />
      {
        query ? <Tabs /> : ''
      }
      {
        query ? <ResultGrid /> : ''
          }
          
    </div>
  )
}

export default Home