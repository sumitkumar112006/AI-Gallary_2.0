import React, { useState } from 'react'
import ResultCard from '../components/ResultCard'
import { useDispatch, useSelector } from 'react-redux'
import { removeCollection, clearCollection } from '../redux/features/collectionSlice'
import { toast } from 'react-toastify';

const CollectionPages = () => {

  const results = useSelector(state=>state.collection.items)

  const dispatch = useDispatch()


  const removeFromCollection = (item) => {
    dispatch(removeCollection(item))
  }
  const Remove = () => {
    toast("Item Removed!", {
      position: "top-center",
      theme: "dark",
    })
  }

  const Clear = () => {
    toast("Cleared all items!", {
      position: "top-center",
      type:'error',
      theme: "dark",
    })
  }


  const clearAllCollection = () => {
    dispatch(clearCollection())
    Clear()
  }





  return (
    <div className='w-full min-h-screen bg-gray-950 text-white'>
      <button className='text-shadow-2xs active:scale-95 bg-gray-700 text-white rounded px-3 py-1 cursor-pointer ml-5'
      onClick={()=>{clearAllCollection()}}
      >Empty Card</button>
      
      <div className='w-full flex flex-wrap justify-center min-h-screen gap-4 p-10 h-100vh'>
        {
          results.map((item, idx) => {
            return <div key={idx} className=''>
              <ResultCard {...item} />
              <div className='relative'>
                <button className='text-shadow-2xs active:scale-95 bg-gray-700 text-white rounded px-3 py-1  bottom-1 left-50 absolute cursor-pointer'
                  onClick={() => { removeFromCollection(item),Remove() }}
                >Remove</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default CollectionPages