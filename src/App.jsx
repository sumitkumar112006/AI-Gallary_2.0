import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CollectionPages from './pages/CollectionPages'
import Header from './components/Header'


const App = () => {


  return (
    <div className='h-100vh w-full bg-gray-950 text-white '>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<CollectionPages />} />
      </Routes>
    </div>
  )
}

export default App