import React from 'react'
import './RigtSidebar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'

const RigtSidebar = () => {
  return (
    <aside className='right-sidebar'>
        <Widget />
        <WidgetTags />
    </aside>
  )
}

export default RigtSidebar