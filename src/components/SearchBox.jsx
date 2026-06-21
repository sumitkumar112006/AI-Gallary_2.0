import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBox = () => {


    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const formSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(setQuery(text))
        setText('')
    }

    return (
        <div>
            <form onSubmit={(e) => { formSubmitHandler(e) }} className='flex gap-5 p-10 bg-gray-900'>
                <input
                    value={text}
                    required
                    onChange={(e) => {
                        setText(e.target.value);
                        
                    }}
                    className='w-full border-2 px-4 py-1 text-xl rounded outline-none '
                    type="text" placeholder='Search anything...' />
                <button className='active:scale-95 cursor-pointer border-2 px-4 py-1 text-xl rounded outline-none '>Search</button>
            </form>
        </div>
    )
}

export default SearchBox