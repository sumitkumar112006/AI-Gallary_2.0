import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gif']

    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)



    return (
        <div className='flex gap-5 p-10'>
            {tabs.map((elem, idx) => (
                <button
                    key={idx}
                    className={`${activeTab === elem ? "bg-gray-300" : "bg-gray-500"
                        } transition px-5 rounded py-2 uppercase cursor-pointer active:scale-95`}
                    onClick={() => dispatch(setActiveTab(elem))}
                >
                    {elem}
                </button>
            ))}
        </div>
    )
}

export default Tabs