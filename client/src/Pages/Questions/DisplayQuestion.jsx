import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RigtSidebar from '../../components/RigtSidebar/RigtSidebar'
import QuestionsDetails from './QuestionsDetails'
const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
    <LeftSidebar />
    <div className='home-container-2'>
      <QuestionsDetails />
      <RigtSidebar />
    </div>
  </div>
  )
}

export default DisplayQuestion