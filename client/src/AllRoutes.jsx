import React from 'react'

import {Routes, Route} from 'react-router-dom'

import Home from '../src/Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Questions/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
import Subscription from './Pages/Subscription/Subscription'

const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Auth' element={<Auth />} />
    <Route path='/Questions' element={<Questions />} />
    <Route path='/AskQuestion' element={<AskQuestion />} />
    <Route path='/Questions/:id' element={<DisplayQuestion />} />
    <Route path='/Subscription' element={<Subscription/>}/>
    <Route path='/Tags' element={<Tags />} />
    <Route
        path="/Users"
        element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
    <Route
        path="/Users/:id"
        element={
          <UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
    
    </Routes>
  )
}

export default AllRoutes