import React, { useState } from 'react'
import ResultCard from '../components/ResultCard'

const CollectionPages = () => {

  let [data, setData] = useState([])


  const getCollection = () => {
    let result = JSON.parse(localStorage.getItem('collection'))
    setData = [...result, { collection: 'collection' }]
    
  }

  getCollection()

  return (
    <div className='w-full min-h-screen bg-gray-950 text-white'>
      <button className='bg-gray-700 px-4 rounded ml-2' >See All Collectiona <span>{'>'}</span></button>
      <div className='w-full flex flex-wrap justify-center min-h-screen gap-4 p-10 h-100vh'>
        {
          data.map((item, idx) => {
            return <div key={idx}>
              <ResultCard {...item} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default CollectionPages