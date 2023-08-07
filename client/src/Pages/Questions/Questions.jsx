import React from 'react'

import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RigtSidebar from '../../components/RigtSidebar/RigtSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'

const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2'>
        <HomeMainbar />
        <RigtSidebar />
      </div>
    </div>
  )
}

export default Questions